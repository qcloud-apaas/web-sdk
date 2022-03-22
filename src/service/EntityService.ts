import { GetRecordByFilterRequestParams, CreateRecordParams, UpdateRecordParams, GetRecordByIdResponse, GetRecordByFilterResponse, EntityHttpResponse, InvokeDataSourceMethodResponse, InvokeDataSourceMethodRequestParams } from '../types/entity';
import { Field } from '../types/model';

export declare namespace IEntityService {
  type getService = (entityIdentifier: string, options?: {
    queryBy?: 'apiKey' | 'code';
  }) => IEntityService;
}

export declare class IEntityService {
  /**
   * 根据recordId获取单条数据
   * @param recordId 记录ID
   * @param options 参数配置
   */
  getRecordById(recordId: string, options?: { useCache?: boolean; queryBy?: 'apiKey' | 'code' }): Promise<GetRecordByIdResponse>;

  /**
   * 根据筛选条件获取多条数据
   * @param params 请求参数
   */
  getRecordsByFilter(params: GetRecordByFilterRequestParams): Promise<GetRecordByFilterResponse>;

  /**
   * 创建一条记录
   * @param params 请求参数
   */
  createRecord(params: CreateRecordParams): Promise<EntityHttpResponse<string>>;

  /**
   * 删除单条记录
   * @param recordId 请求参数
   */
  deleteRecord(recordId: string): Promise<EntityHttpResponse>;

  /**
   * 批量删除多条记录
   * @param recordId 请求参数
   */
  batchDeleteRecords(recordIds: string[]): Promise<EntityHttpResponse>;

  /**
   * 批量创建或更新多条记录
   * @param records 根据传入数组中是否有recordId判断是新建还是更新
   */
  batchCreateOrUpdateRecords(records: Record<string, any>[]): Promise<EntityHttpResponse<{ recordIds: string[] }>>;

  /**
   * 更新记录
   * @param params 请求参数
   */
  updateRecord(params: UpdateRecordParams): Promise<EntityHttpResponse<string>>;

  /**
   * 获取所有的字段信息
   */
  getFields(): Promise<EntityHttpResponse<Field[]>>;

  /**
   * 获取所有可读的字段信息
   */
  getReadableFields(): Promise<EntityHttpResponse<Field[]>>;

  /**
   * 获取所有的字段的读写权限
   */

  getFieldPermissions(): Promise<EntityHttpResponse<Record<string, { writeable: boolean, readable: boolean }>>>;

  /**
   * 调用对象实体的自定义动作
   * @param params 自定义动作的参数
   */
  invokeDataSourceMethod(params: InvokeDataSourceMethodRequestParams): Promise<EntityHttpResponse<InvokeDataSourceMethodResponse>>;

  /**
   * 根据字段的apiKey 同步获取字段信息
   * @param apiKey 字段的apiKey
   */
  getFieldByApiKeySync(apiKey: string): Field;

  /**
   * 将apiKey转换为code
   * @param code 字段编码code
   */
  convertApiKeyToCode(apiKey: string): string;

  /**
   * 将code转换为apiKey
   * @param code 字段编码code
   */
  convertCodeToApiKey(code: string): string;

  /**
   * 将Record数据由apiKey转换为code
   * @param values apiKey格式数据
   */
  convertApiKeyValuesToCodeValues(values: Record<string, any>): Record<string, any>;

  /**
   * 将Record数据由code转换为apiKey
   * @param values code格式数据
   */
  convertCodeValuesToApiKeyValues(values: Record<string, any>): Record<string, any>;

}

