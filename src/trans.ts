import { ObjectKeysTransType } from './types';

const META_REG = /^(str|exp|fun)\(([\s\S]+)?\)$/;

/**
 * Remove meta value wrapper
 */
export function transMetaVal2PureVal<T>(val: T): T;
export function transMetaVal2PureVal(val: any) {
  if (['boolean', 'number', 'undefined'].includes(typeof val) || val === null) {
    return val;
  }

  if (typeof val === 'string') {
    const matchStr = val.match(META_REG);
    if (matchStr) return matchStr[2];
    return val;
  }

  if (Array.isArray(val)) {
    return val.map((v) => transMetaVal2PureVal(v));
  }

  if (typeof val === 'object') {
    const result: Record<string, any> = {};
    Object.entries(val).forEach(([key, value]) => {
      result[key] = transMetaVal2PureVal(value);
    });
    return result;
  }
}

/**
 * 将对象的key转换为camelCase（默认）或 PascalCase
 * @param obj 被转换的对象
 * @param type 转换类型，默认 camelCase
 */
export const transObjectKeys = (obj: any, type: ObjectKeysTransType = ObjectKeysTransType.camel): any => {
  if (Array.isArray(obj)) {
    return obj.map((o) => transObjectKeys(o, type));
  }
  if (obj && typeof obj === 'object') {
    const result: any = {};
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = key.replace(/^\S/, (s) =>
        type === ObjectKeysTransType.camel ? s.toLowerCase() : s.toUpperCase(),
      );
      result[newKey] = transObjectKeys(value, type);
    });
    return result;
  }
  return obj;
};
