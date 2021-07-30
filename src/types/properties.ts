import { Entity, Field } from './model';

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

export type DataSourceResult = {
  entities: Entity[];
  fields: Field[];
  selectedEntity: Entity;
  selectedEntityCode: string;
};

export type UseDataSourceApi = (dataSource: DynamicDataSource) => DataSourceResult;
