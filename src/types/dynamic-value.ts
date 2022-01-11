/**
 * 表单控件展示模式
 * 0常量、1表达式、2无值
 */
export enum DynamicValueTypes {
  Constant = 0,
  Expression = 1,
  None = 2,
}

export type DynamicValueConfig = {
  type: DynamicValueTypes;
  value: any;
};

export type UseDynamicValueApi = (config: DynamicValueConfig, opt: { rowIndex?: number; defaultValue?: any }) => any;
