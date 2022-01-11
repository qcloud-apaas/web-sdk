import { IComponentService, IPageService, IGlobalService, IEntityService, IDataRecordService } from '../service';

export type UseComponentServiceApi = () => IComponentService;
export type UsePageServiceApi = () => IPageService;
export type UseGlobalServiceApi = () => IGlobalService;
export type UseDataRecordServiceApi = () => IDataRecordService;
export type UseEntityServiceApi = (queryId: string, options?: { queryBy?: 'apiKey' | 'code' }) => IEntityService;