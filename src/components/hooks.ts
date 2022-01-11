import { PageData } from '../types/model';

export type HooksDefinition = {
  beforeCreate?: (props: any, pageData: any) => any;
  created?: (props: any, pageData: any) => any;
  beforeUpdate?: (newProps: any, oldProps: any, pageData: PageData) => any;
  updated?: (props: any, pageData: any) => any;
  beforeDestroy?: (props: any) => any;
  destroyed?: (props: any) => any;
};