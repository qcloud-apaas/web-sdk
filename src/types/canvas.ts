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
};

export type UseCanvasApi = () => CanvasResult;
