export type ComponentKey =
  | 'Demo'
  // 数据组件
  | 'DataForm' // 表单
  | 'DataGrid' // 列表
  | 'StreamList' // 流式列表
  | 'ListView' // ListView
  | 'DataTree' // DataTree
  | 'Swiper' // Swiper
  // 布局组件
  | 'Stack' // 容器
  | 'Grid' // 栅格
  | 'Col' // 栅格列，作为容器
  | 'Card' // 分组组件，卡片
  | 'Group' // 分组
  | 'Tabs' // TAB页签
  | 'TabPanel' // Tab Panel
  | 'Panel' // 面板
  | 'LinkBlock'
  | 'Column'
  | 'Alignment' // 对齐方式
  | 'Stepper' // 步骤条组件
  // 输入组件
  | 'Input' // 单行输入框
  | 'TextArea' // 多行输入框
  | 'DatePicker' // 时间选择器
  | 'InputNumber' // 数字输入框
  | 'RangeNumber' // 数字区间
  | 'Search' // 搜索组件
  | 'UploadFile' // 文件上传
  | 'UploadImage' // 图片上传
  | 'Radio' // 单选框
  | 'Check' // 复选框
  | 'Dropdown' // 下拉框
  | 'Select' // 下拉列表
  | 'Cascader' // 级联选择
  | 'Switch' // 开关
  | 'Score' // 评分
  | 'SubForm' // 子表单
  | 'Member' // 人员选择
  | 'Department' // 部门选择
  | 'Local' // 地区选择
  | 'Country' // 国家选择
  | 'ReferenceSelector' // ReferenceSelector选择器
  | 'DateRangePicker' // DateRangePicker日期区间选择
  | 'DataView' // DataView 数据容器
  // 通用组件
  | 'Button' // 按钮
  | 'Text' // 文本
  | 'Icon' // 图标
  | 'Image' // 图标
  // 高级组件
  | 'Sms' // 短信验证码
  | 'RichText' // 富文本
  | 'Ocr' // OCR
  | 'WechatPay' // 微信支付
  | 'Positioning' // 定位组件
  | 'Meeting' // 会议组件
  | 'Jsx' // JSX代码组件
  | 'VideoPlayer' // 视频播放组件
  | 'Iframe' // iframe 内嵌框架组件
  // 审批按钮
  | 'AgreeBtn' // 同意
  | 'ApplyBtn' // 申请
  | 'CancelBtn' // 取消
  | 'RefuseBtn' // 驳回
  | 'SearchForm' // 查询表单
  | 'StackContainer' // 根容器组件
  | 'FloatButton' // 悬浮按钮
  | 'Timeline' // 时间轴
  | 'Slider' // 滑块
  | 'LineChart' // 折线图
  | 'ListItem' // 列表项
  | 'BiSearchBox' // BI搜索框
  | 'BiSearchForm' // BI搜索表单
  | 'DataSet' // 数据集
  | 'Statement'
  | 'PivotTable'

