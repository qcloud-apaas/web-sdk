import { StatePatcher } from '../components/states';
import IComponentService from './ComponentService';

declare namespace IPageService {
  type getService = (pageCode: string) => IPageService;
}

declare class IPageService {
  static getService(pageCode: string): IPageService;

  /**
   * 根据传入的组件ID，返回页面中指定组件的前端组件服务。
   * @param compId 组件ID
   */
  getComponentService(compId: string): IComponentService;

  getComponentState<T = any>(compId: string): T;

  setComponentState<T = any>(compId: string, patcher: StatePatcher<T>): void;

  execComponentAction(compId: string, actionName: string, params: any): void;

  setVariable<T = any>(key: string, value: T): void;

  getVariable<T = any>(key: string): T;

  getParamVariable<T = any>(key: string): T;
}

export default IPageService;
