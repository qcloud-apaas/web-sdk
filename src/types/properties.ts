export interface DynamicDataSource {
  autoFill: boolean;
  apiKey: string;
  entityCode: string;
  flowCode: string;
  flowEntityCode: string;
  sysField: boolean;
  type: 'flow' | 'context' | 'database';
  variableType: 'object' | 'objectList' | 'jsonSchema';
}
