import { StatePatcher } from '../components/state';

declare class ComponentService<State = any, Props = any> {
  getState<S = State>(): S;

  setState<S = State>(patcher: StatePatcher<S>): void;

  setStateByKey<V = S[K], S = State, K = keyof S>(stateKey: K, patcher: StatePatcher<V>): void;

  getStateByKey<V = S[K], S = State, K extends keyof S = keyof S>(stateKey: K): V;

  getProps<P = Props>(): P;

  getPropByKey<V = P[K], P = Props, K extends keyof P = keyof P>(key: string): V;

  execAction(actionName: string, params: any): void;

  evaluateExpression(expression: string): any;

  evaluateExpressionWithContext(expression: string, context: any): any;

  forceUpdate(): void;
}

export default ComponentService;
