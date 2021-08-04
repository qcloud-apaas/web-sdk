import { Entity, Field } from './model';

export interface DynamicDataSource {
  autoFill: boolean;
  apiKey: string;
  entityCode: string;
  flowCode: string;
  flowEntityCode: string;
  sysField: boolean;
  type: 'flow' | 'context' | 'database';
  variableType: ObjectVariableType;
  fields: Field[];
}

export type DesignDataSourceResult = {
  entities: Entity[];
  fields: Field[];
  selectedEntity: Entity;
  selectedEntityCode: string;
};

export type UseDataSourceApi = (dataSource: DynamicDataSource) => DesignDataSourceResult;

export type ObjectVariableType = 'object' | 'objectList' | 'jsonSchema';
