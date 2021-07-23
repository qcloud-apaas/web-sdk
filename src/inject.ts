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
  inject(BuiltInComponent, injection);
};

export const injectDesignModeBuiltIns = (injection: DesignModeBuiltIns): void => {
  inject(BuiltInComponent, injection);
};

export const injectRunMode = (injection: { SDK: RunModeSDKInjection; BuiltInComponent: RunModeBuiltIns }) => {
  inject(SDK, injection.SDK);
  inject(BuiltInComponent, injection.BuiltInComponent);
};

export const injectDesignMode = (injection: { SDK: DesignModeSDKInjection; BuiltInComponent: DesignModeBuiltIns }) => {
  inject(SDK, injection.SDK);
  inject(BuiltInComponent, injection.BuiltInComponent);
};
