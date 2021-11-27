import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { ComponentKey } from './component-key';
import { PageData } from './model';

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
  | 'Slot';

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
  title: string;
  items: string[];
};

export type SlotTemplate = {
  component?: string;
  slot: string;
  key?: string;
  props?: any;
  code?: string;
  children?: SlotTemplate[];
};

export type DynamicSlotTemplate = SlotTemplate | ((props: any) => SlotTemplate);

export type PanelConfig = {
  fields: DynamicFormField[];
  groups: DynamicFormGroup[];
  slots?: DynamicSlotTemplate | DynamicSlotTemplate[];
};

export type SlotsConfig = SlotTemplate[];

export type HooksConfig = {
  beforeCreate?: (props: any, pageData: any) => any;
  created?: (props: any, pageData: any) => any;
  beforeUpdate?: (newProps: any, oldProps: any, pageData: PageData) => any;
  updated?: (props: any, pageData: any) => any;
  beforeDestroy?: (props: any) => any;
  destroyed?: (props: any) => any;
};

export type ComponentActionParamItem = {
  label: string;
  key: string;
  type: string;
  component?: string | React.Component | ((props: any) => React.ReactElement);
};

export type ComponentActionDefinition = {
  label: string;
  key: string;
  params?: ComponentActionParamItem[];
};

export type ComponentStateDefinition = {
  label: string;
  key: string;
};

export type ComponentConfig = {
  key: ComponentKey; // 组件唯一标识
  title: string; // 组件名
  icon: string; // 组件图标
  component: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>>; // 设计态组件
  panelConfig: PanelConfig; // 属性面板配置
  hooksConfig?: HooksConfig;
  slotsConfig?: DynamicSlotTemplate | DynamicSlotTemplate[];
  actionsConfig?: ComponentActionDefinition[];
  statesConfig?: ComponentStateDefinition[];
};
