export declare class IDataRecordService<R = any> {
  recordData: R;
  recordId: string;
  entityCode: string;
  getFieldValues(): R;

  getFieldValuesByApiKey(): any;

  setFieldValues(values: Partial<R>): void;

  setFieldValueByCode(code: string, value: any): void;

  setFieldValueByApiKey(apiKey: string, value: any): void;

  subscribeContextFieldByKey(fieldApiKey: string, callback: Function): any;
}

