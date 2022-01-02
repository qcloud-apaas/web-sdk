import IComponentService from '../service/ComponentService';
import IPageService from '../service/PageService';
import IGlobalService from '../service/GlobalService';
import IEntityService from '../service/EntityService';
import IDataRecordService from '../service/DataRecordService';

export type UseComponentServiceApi = () => IComponentService;
export type UsePageServiceApi = () => IPageService;
export type UseGlobalServiceApi = () => IGlobalService;
export type UseDataRecordServiceApi = () => IDataRecordService;
export type UseEntityServiceApi = (queryId: string, options?: { queryBy?: 'apiKey' | 'code' }) => IEntityService;