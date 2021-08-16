import { FormApi } from 'final-form';
import { FieldRenderProps } from 'react-final-form-hooks';
import { CanvasMode, CanvasSize } from './canvas';

export type ControlSetting = {
  created?: boolean; // 组件创建控制器，用于控制组件内部创建动作
  autoFill?: boolean; // 自动填充
  sysField?: boolean; // 是否填充系统字段
};

export declare type ComponentProperty<T = any> = {
  control?: ControlSetting;
  props?: T;
  component?: string;
};
export declare type ComponentData = {
  code: string;
  componentType?: number;
  index?: number;
  parentCode: string;
  type?: string;
  property: ComponentProperty;
  updateProperty(property: Partial<ComponentProperty>): void;
};

/**
 * 设计态使用
 */
export type ContainerContextData = {
  compData?: ComponentData;
  componentsMap?: Record<string, any>;
  relationMap?: Record<string, any>;
};

/**
 * 表单控件展示模式
 * 1编辑、2只读、3文本、4继承
 */
export enum FormFieldShowModeType {
  Edit = 1,
  ReadOnly = 2,
  Text = 3,
  Inherit = 4,
}

/**
 * 表单控件展示模式
 * 0无权限、1只读、2可写
 */
export enum FormFieldPermission {
  None = 0,
  ReadOnly = 1,
  Writable = 2,
}

type EvaluateExpressionResultType = 'number' | 'stringLiteral' | 'boolean' | 'dateTime' | 'object' | 'collection';

/**
 * 表单上下文
 */
export type DataFormContextData = ContainerContextData & {
  code?: string;
  /**
   * 表单布局
   * 默认、固定、垂直、行内、行内垂直
   */
  layout?: 'default' | 'fixed' | 'vertical' | 'inline' | 'inline-vertical';
  /**
   * 表单控件展示模式
   * 1编辑、2只读、3文本、4继承
   */
  showMode: FormFieldShowModeType;
  /**
   * final-form 表单实例
   */
  form: FormApi;
  /**
   * 对react-final-form-hooks的useField方法的封装
   */
  useField: (fieldProps: {
    compId: string;
    fieldSource: { code: string; apiKey: string };
    validators: Record<string, any>;
  }) => FieldRenderProps;
  /**
   * 表单是否提交中
   */
  submitting: boolean;
  /**
   * 表单是否未填写
   */
  pristine: boolean;
  /**
   * 表单组件类型，0 DataForm, 1 SearchForm
   */
  formComponentType: FormComponentType;
  /**
   * 获取组件最终展示模式，如果是继承返回表单的展示模式，否则返回组件自身的展示模式
   */
  getFinalShowMode: (componentShowMode: FormFieldShowModeType) => FormFieldShowModeType;
  /**
   * 获取用户对字段的访问权限，仅运行态使用
   */
  getFieldPermission: (fieldCode: string) => FormFieldPermission;
  /**
   * 返回整个表单数据，仅运行态使用
   */
  getValues: () => Record<string, any>;
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (exp: string) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
  /**
   * 校验表单字段，仅运行态使用
   */
  validateField: (name: string, val: any, validators: Record<string, any>) => Promise<string>;
  /**
   * 提交表单方法，仅运行态使用
   */
  handleSubmit: () => void;
};

/**
 * DataGrid上下文
 */
export type DataGridContextData = ContainerContextData & {
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (
    exp: string,
    opt: { rowIndex: number },
  ) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
};

/**
 * ListView上下文
 */
export type ListViewContextData = ContainerContextData;

/**
 * ListView记录上下文
 */
export type ListViewRecordContextData = {
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (exp: string) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
};

export type CanvasContextData = {
  /**
   * 画布尺寸
   */
  size: CanvasSize;
  /**
   * 画布模式，运行态、设计态
   */
  mode: CanvasMode;
  /**
   * 当前页面编码
   */
  pageCode: string;
  /**
   * @deprecated
   * 当前页面编码
   */
  pageKey: string;
  /**
   * 返回整个画布的上下文数据，仅运行态使用
   */
  getValues?: () => Record<string, any>;
  /**
   * 设置上下文数据，仅运行态使用
   * @param key 对象apiKey
   * @param value 数据
   */
  setValue?: (key: string, value: Record<string, any>) => void;
};

export enum FormComponentType {
  DataForm = 0,
  SearchForm = 1,
}
