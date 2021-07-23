import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { ComponentKey } from './component-key';

export type DynamicFormBuildInComps =
  | 'InputString'
  | 'InputNumber'
  | 'InputUnit'
  | 'DateDisplay'
  | 'Button'
  | 'ColumnsSetting'
  | 'RadioGroup'
  | 'CheckboxGroup'
  | 'ExpressionEditor'
  | 'Select'
  | 'VerifyFields'
  | 'CodeEditor'
  | 'EventEditor'
  | 'Switch'
  | 'FieldSource'
  | 'HandleEvent'
  | 'DefaultValue'
  | 'ActionList'
  | 'DataSource'
  | 'StackLayout'
  | 'PageSetting'
  | 'SortRule'
  | 'TreeOperatesSetting';

export type DynamicFormPropType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'function'
  | 'expression'
  | 'object'
  | 'array'
  | 'event'
  | 'fieldSource'
  | 'defaultValue'
  | 'actionList'
  | 'dataSource';

export type DynamicFormField<V = Record<string, any>> = {
  key: string;
  component: DynamicFormBuildInComps | React.Component | ((props: any) => React.ReactElement);
  label?: string;
  tooltip?: string;
  type?: DynamicFormPropType;
  required?: boolean;
  /*
   * 传递属性组件的props
   */
  props?: Record<string, any>;
  /*
   * 传递属性组件的props
   */
  visible?: boolean;
  validators?: {
    validator: (value: any, values: Partial<V>) => boolean;
    message: string;
  }[];
  /*
   * @alias useVisible
   */
  dependOn?: (values: any, opt: { hasAncestorComponent: (name: string) => boolean }) => boolean;
  /*
   * @alias useParams
   */
  useParams?: (values: any) => any;
  /*
   * 动态组件props
   * @param fieldProps 当前组件的props
   * @param opt 当前上下文配置
   */
  useProps?: (fieldProps: any, opt: { hasAncestorComponent: (name: string) => boolean }) => any;
  /*
   * 动态组件props
   * @param fieldProps 当前组件的props
   * @param opt 当前上下文配置
   */
  useVisible?: (fieldProps: any, opt: { hasAncestorComponent: (name: string) => boolean }) => boolean;
};

export type DynamicFormGroup = {
  title: string;
  items: string[];
};

export type PanelConfig = {
  fields: DynamicFormField[];
  groups: DynamicFormGroup[];
};

export type ComponentConfig = {
  key: ComponentKey; // 组件唯一标识
  title: string; // 组件名
  icon: string; // 组件图标
  panelConfig: PanelConfig; // 属性面板配置
  component: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>>; // 设计态组件
};
