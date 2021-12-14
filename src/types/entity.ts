export type RecordFilterItem = {
  FieldApiKey: string;
  Operator: string;
  Value: any;
}

export type RecordFilterCondition = {
  Conditions: (RecordFilterItem | RecordFilterCondition)[];
  Connector: 'AND' | 'OR';
};

export type GetRecordByFilterRequestParams = {
  appCode: string;
  entityApiKey: string;
  filter: {
    condition?: RecordFilterCondition;
    option?: {
      offset: number;
      limit: number;
      orderBy?: {
        fieldCode: string;
        order: 'DESC' | 'ASC';
      };
      count?: boolean;
    };
  };
}