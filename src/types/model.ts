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
};
