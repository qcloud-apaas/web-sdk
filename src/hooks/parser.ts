import IDataRecordService from '../service/DataRecordService';

type ExpressionParseContext = {
  recordId: string;
  recordData: string;
  entityCode: string;
} | IDataRecordService;

type VariableType = 'global' | 'page' | 'input' | 'system';

export type ParserCallback<V = any> = (result: V) => void;

export type UseExpressionApi<R = any> = (expression: string, callback: ParserCallback<R>) => R;


export type UseExpressionWithContextApi<R = any> = (expression: string, context: ExpressionParseContext, callback: ParserCallback<R>) => R;

export type UseVariableApi<R = any> = (variableType: VariableType, variableKey: string, callback: ParserCallback<R>) => R;

export type UseParserApi = () => {
  parseComponentValue: <V = any>(params: {
    paramType: VariableType;
    key: string;
  }) => V;
  parseVariableValue: <V = any>(params: {
    compId: string;
    source?: 'state' | 'props';
    key: string;
  }) => V;
  parseFileValueAsync: <T = any>(fileIds: T) => Promise<T>;
};

