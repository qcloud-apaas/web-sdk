declare class DataRecordService {
  getFieldValues(): any;

  getFieldValuesByApiKey(): any;

  setFieldValues(values: Record<string, any>): void;

  setFieldValueByCode(code: string, value: string): any;

  setFieldValueByApiKey(apiKey: string, value: any): any;

  subscribeContextFieldByKey(fieldApiKey: string, callback: any): any;
}

export default DataRecordService;
