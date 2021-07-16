export type EventHandlerConfig = {
  action: number;
  [key: string]: any;
};

export type UseEventHandlersProps = {
  onClick?: EventHandlerConfig;
  onChange?: EventHandlerConfig;
  onFocus?: EventHandlerConfig;
  onBlur?: EventHandlerConfig;
  [key: string]: any;
};

export type UseEventHandlersReturn = {
  onClick?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

/**
 * 根据事件配置返回事件响应函数，仅运行态
 */
export type UseEventHandlers = (props: UseEventHandlersProps) => UseEventHandlersReturn;
