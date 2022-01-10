import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { ComponentKey } from '../types/component-key';
import { PanelConfig } from './properties';
import { HooksDefinition } from './hooks';
import { ComponentStateDefinition } from './states';
import { ComponentActionDefinition } from './actions';

export type ComponentConfig = {
  key: ComponentKey; // 组件唯一标识
  title: string; // 组件名
  icon: string; // 组件图标
  component: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>>; // 设计态组件
  panelConfig: PanelConfig; // 属性面板配置
  hooksConfig?: HooksDefinition;
  statesConfig?: ComponentStateDefinition[];
  actionsConfig?: ComponentActionDefinition[];
};
