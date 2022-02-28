import { IGlobalService } from '../service/GlobalService';
import { IPageService } from '../service/PageService';
import { IComponentService } from '../service/ComponentService';
import { IDataRecordService } from '../service/DataRecordService';
import { History, Location } from 'history';

export declare class ActionEventType {
  history: History;
  location: Location;
  currentGlobalService: IGlobalService;
  currentPageService: IPageService;
  currentComponentService: IComponentService;
  currentDataRecordService: IDataRecordService;
}