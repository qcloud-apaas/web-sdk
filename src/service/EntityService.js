import GetRecordByFilterRequestParams from '../types/entity';

declare class EntityService {
  getRecordById(recordId: string, useCache: boolean): Promise<any>;

  getRecordsByFilter(params: GetRecordByFilterRequestParams): any;

  createRecord(params): Promise<any>;

  deleteRecord(recordId): Promise<any>;

  updateRecord(params): Promise<any>;

  getReadableFields(): Promise<any>;

  getFields(): Promise<any>;

  getFieldPermissions(): Promise<any>;

  getFieldByApiKeySync(apiKey): Promise<any>;

  convertCodeToApiKey(code): Promise<any>;

  convertApiKeyToCode(apiKey): Promise<any>;
}

export default EntityService;
