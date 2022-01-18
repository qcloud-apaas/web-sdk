import { EntityHttpResponse, StartFlowResponse } from '../types/entity';
import { EnumItem } from '../types/enums';
import { IPageService } from './PageService';

export declare namespace IGlobalService {
  type getService = () => IGlobalService;
}

export declare class IGlobalService {
  static getService(): IGlobalService;

  /**
   * 根据传入的页面编码，返回对应页面的前端页面服务。
   * @param pageCode 页面编码
   */
  getPageService(pageCode: string): IPageService;

  /**
   * 根据传入的枚举编码获取枚举选项集
   * @param optionSetCode 枚举编码
   */
  getEnumOptionsByCode(optionSetCode: string): Promise<EnumItem[]>;

  /**
   * 为指定名称的**全局变量**设置值(全局变量需要在页面设计态中提前创建)
   * @param key 全局变量名称
   * @param value 全局变量值
   */
  setGlobalVariable<T = any>(key: string, value: T): void;

  /**
   * 根据传入的变量名，获取**全局变量**的值
   * @param key 全局变量名称
   */
  getGlobalVariable<T = any>(key: string): T;

  /**
   * 根据传入的变量名，获取**系统变量**的值。系统变量只读 不可修改
   * @param key 系统变量名称
   */
  getSystemVariable<T = any>(key: string): T;

  /**
   * 打开页面
   * @param pageCode 页面编码
   * @param params 页面入参
   */
  openPage<P extends Record<string, any> = Record<string, any>>(pageCode: string, params: P, callback: () => void): void;

  /**
   * 发起流程
   * @param flowCode 流程编码
   * @param params 流程入参
   */
  startFlow<P extends Record<string, any> = Record<string, any>>(flowCode: string, params: P): Promise<EntityHttpResponse<StartFlowResponse>>;
}

