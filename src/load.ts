const UMD_LIB_PROMISE_CACHE: Record<string, Promise<any>> = {};
const CSS_PROMISE_CACHE: Record<string, Promise<any>> = {};

/**
 * 加载UMD格式的JS库
 * @param url JS库的url
 * @param deps JS库的依赖
 * @returns JS库的导出promise
 */
export function loadUmdLib(url: string, deps: Record<string, any> = {}): Promise<any> {
  return (UMD_LIB_PROMISE_CACHE[url] =
    UMD_LIB_PROMISE_CACHE[url] ||
    new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.addEventListener('load', () => {
        const src = `
          (function () {
            return function (deps) {
              var module = {};
              var exports = {};
              var require = function (key) {
                return deps[key];
              };
              module.exports = exports;
              ${req.responseText};
              return module.exports;
            };
          })();
        `;
        try {
          const factory = (window as any).globalEval(src);
          resolve(factory(deps));
        } catch (e) {
          UMD_LIB_PROMISE_CACHE[url] = null;
          reject(new Error('Eval UMD lib error!'));
        }
      });
      req.addEventListener('error', () => {
        UMD_LIB_PROMISE_CACHE[url] = null;
        reject(new Error('Load UMD lib error!'));
      });
      req.addEventListener('abort', () => {
        UMD_LIB_PROMISE_CACHE[url] = null;
        reject(new Error('Load UMD lib error!'));
      });
      req.open('GET', url);
      req.send();
    }));
}

/**
 * 加载CSS
 * @param url CSS文件的url
 * @returns promise
 */
export function loadCss(url: string): Promise<any> {
  return (CSS_PROMISE_CACHE[url] =
    CSS_PROMISE_CACHE[url] ||
    new Promise((resolve, reject) => {
      const el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = url;
      el.onload = function () {
        resolve(0);
      };
      el.onerror = function () {
        CSS_PROMISE_CACHE[url] = null;
        reject(new Error('Load CSS error!'));
      };
      document.head.appendChild(el);
    }));
}
