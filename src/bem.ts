/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type BemMod = string | Record<string, any>;

export type BemMods = BemMod | BemMod[];

const ELEMENT = '__';
const MODS = '--';

const join = (name: string, el?: string, symbol?: string): string => {
  return el ? name + symbol + el : name;
};

const prefix = (name: string, mods: BemMods): string => {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map((item) => prefix(name, item)).join(' ');
  }

  const ret: string[] = [];
  if (mods) {
    Object.keys(mods).forEach((key) => {
      if (mods[key]) {
        ret.push(name + MODS + key);
      }
    });
  }

  return ret.join(' ');
};

/**
 * Create a bem helper function
 * @param name The block name
 * @returns A bem helper function
 */
export const createBEM = (name: string) => {
  return function (el?: BemMods, mods?: BemMods): string {
    let res: string;
    let realMods: BemMods;
    if (typeof el === 'string') {
      realMods = mods;
      res = join(name, el, ELEMENT);
    } else {
      realMods = el;
      res = name;
    }

    if (mods) {
      res = [res, prefix(res, realMods)].join(' ').trim();
    }
    return res;
  };
};

export type BEM = ReturnType<typeof createBEM>;
