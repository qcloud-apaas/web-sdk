import { IGlobalService } from '../service/GlobalService';
import { IPageService } from '../service/PageService';
import { IComponentService } from '../service/ComponentService';
import { IDataRecordService } from '../service/DataRecordService';

export declare class ActionEventType {
  currentGlobalService: IGlobalService;
  currentPageService: IPageService;
  currentComponentService: IComponentService;
  currentDataRecordService: IDataRecordService;
}