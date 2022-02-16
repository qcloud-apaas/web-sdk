import { DynamicSlotTemplate, SlotTemplate } from './slots';

export type DynamicFormBuildInComps =
  | 'InputString'
  | 'InputNumber'
  | 'InputUnit'
  | 'DateDisplay'
  | 'Button'
  | 'ColumnsSetting'
  | 'RadioGroup'
  | 'CheckboxGroup'
  | 'Expression'
  | 'ExpressionEditor'
  | 'Select'
  | 'VerifyFields'
  | 'CodeEditor'
  | 'EventEditor'
  | 'Switch'
  | 'FieldSource'
  | 'FieldSelect'
  | 'HandleEvent'
  | 'DefaultValue'
  | 'ActionList'
  | 'DataSource'
  | 'StackLayout'
  | 'PageSetting'
  | 'SortRule'
  | 'TreeOperatesSetting'
  | 'ComponentSelect'
  | 'AutoValue'
  | 'ImageSelect'
  | 'ColorPicker';

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
  | 'dataSource'
  | 'componentRef'
  | 'slot';

export type DynamicFormField<V = Record<string, any>> = {
  key: string;
  component: DynamicFormBuildInComps | React.Component | ((props: any) => React.ReactElement);
  label?: string;
  tooltip?: string;
  type?: DynamicFormPropType;
  required?: boolean;
  defaultValue?: any;
  /*
   * 传递属性组件的props
   */
  props?: Record<string, any>;
  /*
   * 传递属性组件的props
   */
  visible?: boolean;
  /*
   * 是否开启表达式输入
   */
  expression?: boolean;
  validators?: {
    validator: (value: any, values: Partial<V>) => boolean;
    message: string;
  }[];
  /*
   * @alias useVisible
   * @deprecated
   */
  dependOn?: (values: any, opt: { hasAncestorComponent: (name: string) => boolean }) => boolean;
  /*
   * @alias useParams
   * @deprecated
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
  id?: string;
  title: string;
  items: string[];
};

export type PanelConfig = {
  fields: DynamicFormField[];
  groups: DynamicFormGroup[];
  slots?: DynamicSlotTemplate | DynamicSlotTemplate[];
};

export type PropertiesDefinition = PanelConfig;

export type SlotsConfig = SlotTemplate[];




