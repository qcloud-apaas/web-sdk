import { DesignModeSDKInjection, RunModeSDKInjection } from './types';
import { SDK } from '.';

export const injectDesignModeSDK = (injection: DesignModeSDKInjection): void => {
  /* eslint-disable */
  for (const k of Object.keys(injection)) {
    /* eslint-enable */
    type Key = keyof DesignModeSDKInjection;
    const key = k as Key;
    if (!SDK[key]) {
      SDK[key] = injection[key] as any;
    }
  }
};

export const injectRunModeSDK = (injection: RunModeSDKInjection): void => {
  /* eslint-disable */
  for (const k of Object.keys(injection)) {
    /* eslint-enable */
    type Key = keyof RunModeSDKInjection;
    const key = k as Key;
    if (!SDK[key]) {
      SDK[key] = injection[key] as any;
    }
  }
};
