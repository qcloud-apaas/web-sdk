import { EnumItem } from '../types/enums';

declare class GlobalService {
  getEnumOptionsByCode(optionSetCode: string): Promise<EnumItem[]>;

  setVariable<T = any>(key: string, value: T): void;

  getVariable<T = any>(key: string): T;
}

export default GlobalService;
