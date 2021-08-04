export type ComponentState<V = any> = {
  value: V;
  visible: boolean;
  entityCode?: string;
  recordId?: string;
  props?: any;
};

export type SetComponentStateApi<V = any> = (compId: string, state: ComponentState<V>) => void;

export type GetComponentStateApi<V = any> = (compId: string) => ComponentState<V>;

declare function UseComponentState<V = any>(): {
  getComponentState: GetComponentStateApi<V>;
  setComponentState: GetComponentStateApi<V>;
};

type UseComponentSubscriberCallback<V = any> = (compState: ComponentState<V>) => void;

declare function UseComponentSubscriber<V>(compId: string): ComponentState<V>;
declare function UseComponentSubscriber<V>(compId: string, callback: UseComponentSubscriberCallback): ComponentState<V>;
declare function UseComponentSubscriberApi<V>(callback: UseComponentSubscriberCallback): ComponentState<V>;

export type UseComponentStateApi = typeof UseComponentState;
export type UseComponentSubscriberApi = typeof UseComponentSubscriber;

export type UseModelApi<V = any> = (
  componentKey: string,
  initialValue?: V,
) => {
  value: V;
  onChange: (val: V) => void;
};
