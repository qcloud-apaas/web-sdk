import React from 'react';
import EventEmitter from 'eventemitter3';
import { AxiosInstance } from 'axios';
import { createBEM } from '../bem';
import { loadUmdLib, loadCss } from '../load';
import { transMetaVal2PureVal, transObjectKeys } from '../trans';
import { useDynamicValue } from '../use-dynamic-value';
import {
  CanvasContextData,
  ContainerContextData,
  DataFormContextData,
  DataGridContextData,
  ListViewContextData,
  ListViewRecordContextData,
} from './container-context-data';
import {
  CreateRecordMethod,
  DeleteRecordsMethod,
  ModifyRecordAttributeMethod,
  FetchRecordsByConditionMethod,
  FetchByDataSourceMethod,
} from './fetch';
import { UseEventHandlers } from './use-event-handlers';
import { DesignModeBuiltIns, RunModeBuiltIns } from './builtins';
import { UseDataSourceApi } from './properties';

export * from './component-key';
export * from './container-context-data';
export * from './dynamic-value';
export * from './fetch';
export * from './jsx-component';
export * from './panel-config';
export * from './trans';
export * from './use-event-handlers';
export * from './model';

export { DesignModeBuiltIns, RunModeBuiltIns };

export type CommonSDK = {
  CanvasContext: React.Context<CanvasContextData>;
  DataFormContext: React.Context<DataFormContextData>;
  SubFormContext: React.Context<DataFormContextData>;
  DataGridContext: React.Context<DataGridContextData>;
  ListViewContext: React.Context<ListViewContextData>;
  ListViewRecordContext: React.Context<ListViewRecordContextData>;
  StackContext: React.Context<ContainerContextData>;
  GridContext: React.Context<ContainerContextData>;
  TabsContext: React.Context<ContainerContextData>;
  eventBus: EventEmitter;
  createBEM: typeof createBEM;
  loadUmdLib: typeof loadUmdLib;
  loadCss: typeof loadCss;
  transMetaVal2PureVal: typeof transMetaVal2PureVal;
  transObjectKeys: typeof transObjectKeys;
  useDynamicValue: typeof useDynamicValue;
};

export type DesignModeSDKInjection = {
  useDataSource: UseDataSourceApi;
  [key: string]: any;
};

export type DesignModeSDK = CommonSDK & DesignModeSDKInjection;

export type RunModeSDKInjection = {
  APP_CODE: string;
  API_BASE: string;
  useEventHandlers: UseEventHandlers;
  request: AxiosInstance;
  createRecord: CreateRecordMethod;
  deleteRecords: DeleteRecordsMethod;
  modifyRecordAttribute: ModifyRecordAttributeMethod;
  fetchRecordsByCondition: FetchRecordsByConditionMethod;
  fetchByDataSource: FetchByDataSourceMethod;
};

export type RunModeSDK = CommonSDK & RunModeSDKInjection;

export type SDK = DesignModeSDK & RunModeSDK;

export type BuiltInComponent = DesignModeBuiltIns & RunModeBuiltIns;
