import GetRecordByFilterRequestParams from '../types/entity';

declare class EntityService {
  // 根据recordId获取单条数据
  getRecordById(recordId: string, useCache: boolean): Promise<any>;

  // 根据筛选条件获取多条数据
  getRecordsByFilter(params: GetRecordByFilterRequestParams): any;

  // 创建一条记录
  createRecord(params): Promise<any>;

  // 删除记录（单条或多条）
  deleteRecord(recordId): Promise<any>;

  // 更新记录
  updateRecord(params): Promise<any>;

  // 获取所有的字段信息
  getFields(): Promise<any>;

  // 获取所有的字段的读写权限

  getFieldPermissions(): Promise<any>;

  // 根据字段的apiKey 同步获取字段信息
  getFieldByApiKeySync(apiKey): Promise<any>;

  // 将code转换为apiKey
  convertCodeToApiKey(code): Promise<any>;

  // 将apiKey转换为code
  convertApiKeyToCode(apiKey): Promise<any>;
}

export default EntityService;
