type EventBusHandler<T> = (payload: T) => void;
type EventBusUnsubscribe = () => void;

export declare class CanvasEventBus {
  on<T = any>(name: string, handler: EventBusHandler<T>): EventBusUnsubscribe;
  once<T = any>(name: string, handler: EventBusHandler<T>): void;
  off<T = any>(name: string, handler: EventBusHandler<T>): void;
  emit<T = any>(name: string, payload: T): void;
}

export type UseEventBusApi = (namespace: string) => CanvasEventBus;
