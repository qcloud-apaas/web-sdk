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


