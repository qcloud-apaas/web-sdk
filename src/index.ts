import React from 'react';
import EventEmitter from 'eventemitter3';
import {
  SDK as SDKType,
  BuiltInComponent as BuiltInComponentType,
  CanvasContextData,
  ContainerContextData,
  DataFormContextData,
  DataGridContextData,
  ListViewContextData,
  ListViewRecordContextData,
} from './types';
import { createBEM } from './bem';
import { loadUmdLib, loadCss } from './load';
import { transMetaVal2PureVal, transObjectKeys } from './trans';
import './inject';

export * from './types';
export * from './constant';

export const SDK: SDKType = ({
  CanvasContext: React.createContext<CanvasContextData>(null),
  DataFormContext: React.createContext<DataFormContextData>(null),
  SubFormContext: React.createContext<DataFormContextData>(null),
  DataGridContext: React.createContext<DataGridContextData>(null),
  ListViewContext: React.createContext<ListViewContextData>(null),
  ListViewRecordContext: React.createContext<ListViewRecordContextData>(null),
  StackContext: React.createContext<ContainerContextData>(null),
  GridContext: React.createContext<ContainerContextData>(null),
  TabsContext: React.createContext<ContainerContextData>(null),
  createBEM,
  loadUmdLib,
  loadCss,
  transMetaVal2PureVal,
  transObjectKeys,
} as unknown) as SDKType;

export const BuiltInComponent: BuiltInComponentType = {} as any;
