import { DataSourceRequestParams, DataSourceResponse } from './fetch';
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

export type DataSourceResult = {
  entities: Entity[];
  fields: Field[];
  selectedEntity: Entity;
  selectedEntityCode: string;
  fetch<T = DataSourceResponse>(requestParams?: DataSourceRequestParams): Promise<T>;
};

export type UseDataSourceApi = (dataSource: DynamicDataSource) => DataSourceResult;

export type ObjectVariableType = 'object' | 'objectList' | 'jsonSchema';

export type UsePropertiesApi<P = any> = () => {
  properties: P;
  setProperties(props: P): void;
  entities: Entity[];
};
