import React from 'react';
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
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  CanvasContext: React.createContext<CanvasContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  DataFormContext: React.createContext<DataFormContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  SubFormContext: React.createContext<DataFormContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  DataGridContext: React.createContext<DataGridContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  ListViewContext: React.createContext<ListViewContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  ListViewRecordContext: React.createContext<ListViewRecordContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  StackContext: React.createContext<ContainerContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  GridContext: React.createContext<ContainerContextData>(null),
  /**
   * @deprecated 已废弃，不建议通过SDK使用
   */
  TabsContext: React.createContext<ContainerContextData>(null),
  createBEM,
  loadUmdLib,
  loadCss,
  transMetaVal2PureVal,
  transObjectKeys,
} as unknown) as SDKType;

export const BuiltInComponent: BuiltInComponentType = {} as any;
