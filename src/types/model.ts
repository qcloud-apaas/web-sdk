export type Entity = {
  apiKey: string;
  code: string;
  description: string;
  name: string;
  tenantId: string;
};

export type Field = {
  apiKey: string;
  code: string;
  name: string;
  entityCode: string;
  linkEntityCode?: string;
  linkFieldCode?: string;
  mainField: number; // 是否是主字段
  maxLength: number;
  minLength: number;
  requireFlag: number; // 是否必填
  type: number; // 字段类型
  uniqueFlag: string; // 是否唯一
  customFlag: number; // 是否为自定义字段
  description: string; // 描述文本
  displayFlag: number;
  editFlag: number;
  fieldLink: any;
  layoutFlag: number;
};

export type PageData = {
  entities?: Entity[];
  fields?: Field[];
  componentsMap: Record<string, any>;
  relationMap: Record<string, any>;
};
