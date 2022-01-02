import { EnumItem } from '../types/enums';
import IPageService from './PageService';

declare namespace IGlobalService {
  type getService = () => IGlobalService;
}

declare class IGlobalService {
  static getService(): IGlobalService;

  getPageService(pageCode: string): IPageService;

  getEnumOptionsByCode(optionSetCode: string): Promise<EnumItem[]>;

  setGlobalVariable<T = any>(key: string, value: T): void;

  getGlobalVariable<T = any>(key: string): T;

  getSystemVariable<T = any>(key: string): T;
}

export default IGlobalService;
