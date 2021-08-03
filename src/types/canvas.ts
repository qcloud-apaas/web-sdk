export enum CanvasSize {
  pc = 'pc',
  pad = 'pad',
  mobile = 'mobile',
}

export enum CanvasMode {
  design = 'design',
  run = 'run',
}

export type CanvasResult = {
  /**
   * 当前页面Code
   */
  pageCode: string;
  /**
   * design 设计态 run 运行态
   */
  mode: CanvasMode;
  /**
   * 当前画布尺寸
   */
  size: CanvasSize;
  /**
   * 传入key获取 页面级存储的值
   */
  getValue<V = any>(key: string): V;
  /**
   * 传入key设置 页面级存储的值
   */
  setValue<V = any>(key: string, value: V): void;
  /**
   * 传入key获取 上下文中的值
   */
  // getContextValue<V = any>(key: string): V;
  /**
   * 传入key设置 上下文中的值
   */
  // setContextValue<V = any>(key: string, value: V): void;
};

export type UseCanvasApi = () => CanvasResult;
