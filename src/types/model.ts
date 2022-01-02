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
  entityCode: string;
  linkEntityCode?: string;
  linkFieldCode?: string;
  mainField: string;
  maxLength: number;
  minLength: number;
  name: string;
  requireFlag: number;
  type: number;
  uniqueFlag: string;
  customFlag: number;
  description: string;
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
