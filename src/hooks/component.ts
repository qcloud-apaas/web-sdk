import { StatePatcher } from '../components/states';

export type SetStateDispatcher<V = any> = (patcher: V | StatePatcher<V>) => void;

export type UseComponentStateApi<V = any> = (stateKey: string, intialValue: V) => [V, SetStateDispatcher];

export type UseComponentActionApi<F extends Function = Function> = (actionName: string, actionCallback: F, deps: Array<any>) => F;

export type UseModelApiOptions<V> = {
  stateKey?: string;
  fieldBinding?: {
    code: string;
    apiKey: string;
  };
  defaultValue?: V;
  defaultValueByExpression?: string;
  dynamicValue?: string;
  validators?: any;
  formatter?: (value: any) => V;
  beforeSubmit?: (value: V) => void | boolean;
};

export type UseModelApi<V = any> = (options: UseModelApiOptions<V>) => {
  value: V;
  onChange: (val: V) => void;
  onBlur: () => void;
  onFocus: () => void;
  meta: any;
};

type UseComponentSubscriberCallback<S = any> = (compState: S) => void;

declare function UseComponentSubscriber<S = any>(compId: string): S;
declare function UseComponentSubscriber<S = any>(compId: string, callback: UseComponentSubscriberCallback): S;
declare function UseComponentSubscriberApi<S = any>(callback: UseComponentSubscriberCallback<S>): S;

export type UseComponentSubscriberApi = typeof UseComponentSubscriber;