import { IDataRecordService } from '../service';

type ExpressionParseContext = {
  recordId: string;
  recordData: Record<string, any>;
  entityCode: string;
} | IDataRecordService;

type VariableType = 'global' | 'page' | 'input' | 'system';

export type ParserCallback<V = any> = (result: V) => void;

export type UseExpressionApi<R = any> = (expression: string, callback: ParserCallback<R>) => R;


export type UseExpressionWithContextApi<R = any> = (expression: string, context: ExpressionParseContext, callback: ParserCallback<R>) => R;

export type UseVariableApi<R = any> = (variableType: VariableType, variableKey: string, callback: ParserCallback<R>) => R;

export type UseParserApi = () => {
  parseVariableValue: <V = any>(
    paramType: VariableType,
    key: string,
  ) => V;
  parseComponentValue: <V = any>(
    compId: string,
    source?: 'state' | 'props',
    key?: string,
  ) => V;
  parseFileValueAsync: <T = any>(fileIds: T) => Promise<T>;
};

