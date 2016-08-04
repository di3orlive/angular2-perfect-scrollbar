import { provide, Provider } from '@angular/core';

export interface PerfectScrollbarConfigInterface {
}

export class PerfectScrollbarConfig implements PerfectScrollbarConfigInterface {
}

const DEFAULT_CONFIGURATION = new PerfectScrollbarConfig();

/**
 * Creates a provider for a {@link PerfectScrollbarConfig})
 */
export function providePerfectScrollbarConfig(configInterface: PerfectScrollbarConfigInterface): Provider {
  return provide(PerfectScrollbarConfig, {
    useFactory: () => {
      const config = new PerfectScrollbarConfig();

      return config;
    }
  });
}
