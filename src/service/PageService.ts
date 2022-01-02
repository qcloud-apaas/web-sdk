import { StatePatcher } from '../components/state';
import IComponentService from './ComponentService';

declare namespace IPageService {
  type getService = (pageCode: string) => IPageService;
}

declare class IPageService {
  static getService(pageCode: string): IPageService;

  getComponentService(compId: string): IComponentService;

  getComponentState<T>(compId: string): T;

  setComponentState<T>(compId: string, patcher: StatePatcher<T>): void;

  execComponentAction(compId: string, actionName: string, params: any): void;

  setVariable<T = any>(key: string, value: T): void;

  getVariable<T = any>(key: string): T;

  getParamVariable<T = any>(key: string): T;
}

export default IPageService;
