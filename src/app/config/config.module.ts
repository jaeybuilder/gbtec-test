import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CONFIG } from '../services/config.service';

@NgModule()
export class ConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: ConfigModule) {
    if (parentModule) {
      throw new Error(
        'FuseModule is already loaded. Import it in the AppModule only!'
      );
    }
  }

  static forRoot(config: any): ModuleWithProviders<any> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
