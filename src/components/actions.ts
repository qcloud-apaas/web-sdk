export type ComponentActionParamItem = {
  label: string;
  key: string;
  type: string;
  component?: string | React.Component | ((props: any) => React.ReactElement);
};

export type ComponentActionDefinition = {
  label: string;
  key: string;
  params?: ComponentActionParamItem[];
};
