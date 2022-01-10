import { StatePatcher } from '../components/states';

declare namespace IComponentService {
  type getService = (pageCode: string, compId: string) => IComponentService;
}

declare class IComponentService<State = any, Props = any> {
  getState<S = State>(): S;

  setState<S = State>(patcher: StatePatcher<S>): void;

  setStateByKey<S = State, K extends keyof S = keyof S, V = S[K]>(stateKey: K, patcher: StatePatcher<V>): void;

  getStateByKey<S = State, K extends keyof S = keyof S, V = S[K]>(stateKey: K): V;

  getProps<P = Props>(): P;

  getPropByKey<P = Props, K extends keyof P = keyof P, V = P[K]>(key: string): V;

  execAction(actionName: string, params?: any): void;

  evaluateExpression(expression: string): any;

  evaluateExpressionWithContext(expression: string, context: any): any;

  forceUpdate(): void;
}

export default IComponentService;
