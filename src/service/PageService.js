import ComponentService from './ComponentService';
import { StatePatcher } from '../components/state';

declare class PageService {
  getComponentState<T>(compId: string): T;

  setComponentState<T>(compId: string, patcher: StatePatcher<T>): void;

  getComponentService(compId: string): ComponentService;

  execComponentAction(compId: string, actionName: string, params: any): void;

  setVariable<T = any>(key: string, value: T): void;

  getVariable<T = any>(key: string): T;

  getParamVariable<T = any>(key: string): T;
}

export default PageService;
