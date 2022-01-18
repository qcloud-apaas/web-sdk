import { ResponseError } from './fetch';

export type EntityHttpResponse<T = any> = {
  data: T;
  error?: ResponseError;
}
/**
 * EQ(相等) / NOT_EQ(不相等)：支持number类型；
 * CONTAINS(包含) / NOT_CONTAINS(不包含)：支持enum类型包含条件、string类型模糊匹配
 * GT(大于)/GTE(大于等于)：支持number和日期类型
 * LT(小于)/LTE(小于等于)：支持number和日期类型
 */
export type RecordFilterItem = {
  fieldApiKey: string;
  operator: 'EQ' | 'NOT_EQ' | 'CONTAINS' | 'NOT_CONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
  value: any;
}

export type RecordFilterCondition = {
  conditions: (RecordFilterItem | RecordFilterCondition)[];
  connector: 'AND' | 'OR';
};

export type GetRecordByFilterRequestParams = {
  queryBy?: 'apiKey' | 'code',
  fieldCodes?: string[],
  fieldApiKeys?: string[],
  filter?: {
    condition?: RecordFilterCondition;
    option?: {
      offset: number;
      limit: number;
      orderBy?: {
        fieldApiKey: string;
        order: 'DESC' | 'ASC';
      };
      count?: boolean;
    };
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
  invodeResult: any[];
  count: number;
}

export type FlowReturnNodeItem = {
  entityCode: string | null;
  value: any;
  variableType: string;
}

export type StartFlowResponse = {
  closePageFlag?: boolean;
  count?: number;
  returnParams: FlowReturnNodeItem[];
  instanceId: string;
  messageList: any[]
  openPageFlag: boolean;
  refreshPageFlag: boolean;
}