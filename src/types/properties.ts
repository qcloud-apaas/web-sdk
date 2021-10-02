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

export type DataSourceFetcher = <T = DataSourceResponse>(requestParams?: DataSourceRequestParams) => Promise<T>;

export type DataSourceResult = {
  entities: Entity[];
  fields: Field[];
  selectedEntity: Entity;
  selectedEntityCode: string;
  fetchData: DataSourceFetcher;
};

export type DataSourceSubscriber = (fetchData: DataSourceFetcher) => void;

export type UseDataSourceApi = (dataSource: DynamicDataSource, subscriber?: DataSourceSubscriber) => DataSourceResult;

export type ObjectVariableType = 'object' | 'objectList' | 'jsonSchema';

export type UsePropertiesApi<P = any> = () => {
  properties: P;
  setProperties(props: P): void;
  setPropertyByKey<K extends keyof P>(key: K, propValue: P[K]): void;
  entities: Entity[];
};
