import { DesignModeSDKInjection, RunModeSDKInjection, DesignModeBuiltIns, RunModeBuiltIns } from './types';
import { SDK, BuiltInComponent } from '.';

const inject = <T, I extends Partial<T>>(target: T, injection: I) => {
  /* eslint-disable */
  for (const k of Object.keys(injection)) {
    /* eslint-enable */
    const key = k as keyof T;
    if (!target[key]) {
      target[key] = injection[key] as any;
    }
  }
};

export const injectDesignModeSDK = (injection: DesignModeSDKInjection): void => {
  inject(SDK, injection);
};

export const injectRunModeSDK = (injection: RunModeSDKInjection): void => {
  inject(SDK, injection);
};

export const injectRunModeBuiltIns = (injection: RunModeBuiltIns): void => {
  inject(SDK, injection);
};

export const injectDesignModeBuiltIns = (injection: DesignModeBuiltIns): void => {
  inject(SDK, injection);
};

if (typeof (window as any).readyInject === 'function') {
  (window as any).readyInject(injectRunModeSDK);
}
