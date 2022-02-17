import React from 'react';
import EventEmitter from 'eventemitter3';
import { AxiosInstance } from 'axios';
import { createBEM } from '../bem';
import { loadUmdLib, loadCss } from '../load';
import { transMetaVal2PureVal, transObjectKeys } from '../trans';
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
import { UseDataSourceApi, UsePropertiesApi } from './properties';
import { UseCanvasApi } from './canvas';
import { UseEventBusApi } from './eventbus';
import { UseDynamicValueApi } from './dynamic-value';
import {
  UseComponentServiceApi,
  UsePageServiceApi,
  UseGlobalServiceApi,
  UseEntityServiceApi,
  UseDataRecordServiceApi,
  UseComponentStateApi,
  UseComponentActionApi,
  UseComponentSubscriberApi,
  UseModelApi,
  UseExpressionApi,
  UseExpressionWithContextApi,
  UseVariableApi,
  UseParserApi,
} from '../hooks';
import { IGlobalService, IPageService, IComponentService, IDataRecordService, IEntityService } from '../service';
import ApaaSEnv from './env';

export * from './component-key';
export * from './container-context-data';
export * from './dynamic-value';
export * from './fetch';
export * from './jsx-component';
export * from '../components/properties';
export * from './trans';
export * from './use-event-handlers';
export * from './model';
export * from './properties';
export * from './canvas';
export * from './event';

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
  useCanvas: UseCanvasApi;
};

export type DesignModeSDKInjection = {
  useDataSource: UseDataSourceApi;
  useProperties: UsePropertiesApi;
  [key: string]: any;
};

export type DesignModeSDK = CommonSDK & DesignModeSDKInjection;

export type RunModeSDKInjection = {
  useEventHandlers: UseEventHandlers;
  env: ApaaSEnv;
  request: AxiosInstance;
    /**
   * @deprecated 已废弃，不建议通过SDK使用, 建议使用SDK.getEntityService('yourEntityApiKey').createRecord
   */
  createRecord: CreateRecordMethod;
  /**
   * @deprecated 已废弃，不建议通过SDK使用, 建议使用SDK.getEntityService('yourEntityApiKey').deleteRecord
   */
  deleteRecords: DeleteRecordsMethod;
  /**
  * @deprecated 已废弃，不建议通过SDK使用, 建议使用SDK.getEntityService('yourEntityApiKey').updateRecord
  */
  modifyRecordAttribute: ModifyRecordAttributeMethod;
  /**
   * @deprecated 已废弃，不建议通过SDK使用, 建议使用SDK.getEntityService('yourEntityApiKey').getRecordByFilter
   */
  fetchRecordsByCondition: FetchRecordsByConditionMethod;
  /**
   * @deprecated 已废弃，不建议通过SDK使用, 建议使用const { fetchData } = SDK.useDataSource(dataSource);
   */
  fetchByDataSource: FetchByDataSourceMethod;
  useComponentState: UseComponentStateApi;
  useComponentAction: UseComponentActionApi;
  useComponentSubscriber: UseComponentSubscriberApi;
  useModel: UseModelApi;
  useEventBus: UseEventBusApi;
  useDataSource: UseDataSourceApi;
  useDynamicValue: UseDynamicValueApi;
  useComponentService: UseComponentServiceApi;
  usePageService: UsePageServiceApi;
  useGlobalService: UseGlobalServiceApi;
  useEntityService: UseEntityServiceApi;
  useDataRecordService: UseDataRecordServiceApi;
  useExpressionApi: UseExpressionApi,
  useExpressionWithContextApi: UseExpressionWithContextApi,
  useVariable: UseVariableApi,
  useParser: UseParserApi,
  getGlobalService: IGlobalService.getService,
  getPageService: IPageService.getService,
  getComponentService: IComponentService.getService,
  getEntityService: IEntityService.getService,
};

export type RunModeSDK = CommonSDK & RunModeSDKInjection;

export type SDK = DesignModeSDK & RunModeSDK;

export type BuiltInComponent = DesignModeBuiltIns & RunModeBuiltIns;
