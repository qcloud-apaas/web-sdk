import { useState, useEffect, useContext } from 'react';
import { SDK, DynamicValueTypes, DynamicValueConfig } from '.';

/**
 * 返回动态值的最终解析结果
 * @param config 动态值配置
 * @param opt 可选项
 * @returns 解析结果
 */
export const useDynamicValue = (config: DynamicValueConfig, opt: { rowIndex?: number; defaultValue?: any } = {}) => {
  const formCtx = useContext(SDK.DataFormContext);
  const dgCtx = useContext(SDK.DataGridContext);
  const lvrCtx = useContext(SDK.ListViewRecordContext);
  const [value, setValue] = useState(config?.type === DynamicValueTypes.Constant ? config.value : opt.defaultValue);
  useEffect(() => {
    if (config?.type === DynamicValueTypes.Expression && config.value) {
      const { rowIndex } = opt;
      if (dgCtx && rowIndex >= 0) {
        dgCtx.evaluateExpression(config.value, { rowIndex }).then(({ value }) => {
          setValue(value);
        });
      } else if (lvrCtx) {
        lvrCtx.evaluateExpression(config.value).then(({ value }) => {
          setValue(value);
        });
      } else if (formCtx) {
        formCtx.evaluateExpression(config.value).then(({ value }) => {
          setValue(value);
        });
      }
    }
  });
  return value;
};
