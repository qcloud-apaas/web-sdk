export type MetaDataApiParams = {
  appCode: string;
  entityApiKey: string;
  [key: string]: any;
};

/**
 * 创建记录
 * @param data 创建记录参数
 */
export type CreateRecordMethod = (
  data: MetaDataApiParams & { fieldValueMap: Record<string, any> },
) => Promise<Record<string, any>>;

/**
 * 更新记录
 * @param data 更新记录参数
 */
export type ModifyRecordAttributeMethod = (
  data: MetaDataApiParams & { recordId: string; fieldValueMap: Record<string, any> },
) => Promise<Record<string, any>>;

/**
 * 批量删除记录
 * @param data 批量删除记录参数
 */
export type DeleteRecordsMethod = (data: MetaDataApiParams & { recordIds: string[] }) => Promise<Record<string, any>>;

/**
 * 根据查询条件返回记录列表，仅运行态使用
 * @param data 查询条件
 */
export type FetchRecordsByConditionMethod = (data: MetaDataApiParams) => Promise<Record<string, any>>;
