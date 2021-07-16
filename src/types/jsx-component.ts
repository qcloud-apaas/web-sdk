import { CanvasSize } from '.';

export type JsxDesignModeComponentProps = {
  canvas: {
    size: CanvasSize;
  };
};

export type JsxRunModeComponentProps = {
  /**
   * 组件所在表单上下文数据
   */
  formData?: Record<string, any>;
  /**
   * 组件所在列表列定义
   */
  column?: Record<string, any>;
  /**
   * 组件所在列表行数据
   */
  record?: Record<string, any>;
  /**
   * 组件所在列表单元格数据
   */
  value?: any;
  /**
   * 画布信息
   */
  canvas: {
    size: CanvasSize;
  };
};
