import { ResponseError } from './fetch';

export type EntityHttpResponse<T = any> = {
  data: T;
  error?: ResponseError;
}

export type RecordFilterItem = {
  fieldApiKey: string;
  operator: string;
  value: any;
}

export type RecordFilterCondition = {
  conditions: (RecordFilterItem | RecordFilterCondition)[];
  connector: 'AND' | 'OR';
};

export type GetRecordByFilterRequestParams = {
  fieldApiKeys: string[],
  filter: {
    condition?: RecordFilterCondition;
  };
  option?: {
    offset: number;
    limit: number;
    orderBy?: {
      fieldApiKey: string;
      order: 'DESC' | 'ASC';
    };
    count?: boolean;
  };
}

export type RecordData = {
  entityCode: string;
  entityApiKey: string;
  mainField: string;
  recordId: string;
  fieldValueMap?: Record<string, any>;
  fieldValueMapWithCode?: Record<string, any>;
}


export type GetRecordByIdResponse = EntityHttpResponse<RecordData>;

export type GetRecordByFilterResponse = EntityHttpResponse<{
  records: RecordData[];
  total: number;
}>;

export type CreateRecordParams = {
  data: Record<string, any>;
  queryBy?: 'code' | 'apiKey';
}

export type UpdateRecordParams = {
  data: Record<string, any>;
  queryBy?: 'code' | 'apiKey';
  recordId: string;
}

export type DataSourceMethodParams<T = any> = {
  paramKey: string;
  fieldType: string;
  value: T;
}

export type InvokeDataSourceMethodRequestParams = {
  methodName: string;
  params: DataSourceMethodParams[];
}

export type InvokeDataSourceMethodResponse = {
  invodeResults: any[];
  total: number;
}
