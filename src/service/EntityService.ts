import { GetRecordByFilterRequestParams, CreateRecordParams, UpdateRecordParams, GetRecordByIdResponse, GetRecordByFilterResponse, EntityHttpResponse, InvokeDataSourceMethodResponse, InvokeDataSourceMethodRequestParams } from '../types/entity';
import { Field } from '../types/model';

declare namespace IEntityService {
  type getService = (entityIdentifier: string, options?: {
    queryBy?: 'apiKey' | 'code';
  }) => IEntityService;
}

declare class IEntityService {
  // 根据recordId获取单条数据
  getRecordById(recordId: string, useCache: boolean): Promise<GetRecordByIdResponse>;

  // 根据筛选条件获取多条数据
  getRecordsByFilter(params: GetRecordByFilterRequestParams): Promise<GetRecordByFilterResponse>;

  // 创建一条记录
  createRecord(params: CreateRecordParams): Promise<EntityHttpResponse<string>>;

  // 删除记录（单条或多条）
  deleteRecord(recordId: string): Promise<EntityHttpResponse>;

  // 更新记录
  updateRecord(params: UpdateRecordParams): Promise<EntityHttpResponse<string>>;

  // 获取所有的字段信息
  getFields(): Promise<EntityHttpResponse<Field[]>>;

  // 获取所有的字段的读写权限

  getFieldPermissions(): Promise<EntityHttpResponse<Record<string, { writeable: boolean, readable: boolean }>>>;

  // 调用对象实体的自定义动作
  invokeDataSourceMethod(params: InvokeDataSourceMethodRequestParams): Promise<InvokeDataSourceMethodResponse>;

  // 根据字段的apiKey 同步获取字段信息
  getFieldByApiKeySync(apiKey: string): Field;

  // 将code转换为apiKey
  convertCodeToApiKey(code: string): string;

  // 将Record数据由apiKey转换为code
  convertApiKeyValuesToCodeValues(apiKey: Record<string, any>): Record<string, any>;

  // 将Record数据由code转换为apiKey
  convertCodeValuesToApiKeyValues(values: Record<string, any>): Record<string, any>;

}

export default IEntityService;
