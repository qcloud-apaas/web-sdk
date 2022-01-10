export declare class IDataRecordService<R = any> {
  getFieldValues(): R;

  getFieldValuesByApiKey(): any;

  setFieldValues(values: Partial<R>): void;

  setFieldValueByCode(code: string, value: any): void;

  setFieldValueByApiKey(apiKey: string, value: any): void;

  subscribeContextFieldByKey(fieldApiKey: string, callback: Function): any;
}

