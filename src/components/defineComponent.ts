import { Component, FunctionComponent } from 'react';
import { ComponentStateDefinition } from './states';
import { ComponentActionDefinition } from './actions';
import { PropertiesDefinition } from './properties';
import { DynamicSlotTemplate } from './slots';

export type ComponentDefinitionOption<T = FunctionComponent | Component> = {
  component: T,
  states?: ComponentStateDefinition[],
  actions?: ComponentActionDefinition[],
  properties?: PropertiesDefinition,
  slots?: DynamicSlotTemplate[];
}

export default <T = FunctionComponent | Component>(options: ComponentDefinitionOption<T>): T => {
  if (!options?.component) {
    throw new Error('请传入component参数定义组件');
  }
  const { component, states, actions, properties, slots } = options as any;
  component.states = states;
  component.properties = properties;
  component.actions = actions;
  component.slots = slots;
  return component;
}