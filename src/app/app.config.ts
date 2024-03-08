import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_CONFIG } from '@angular/common';

const disableImageWarningsProvider = {
  provide: IMAGE_CONFIG,
  useValue: {
    disableImageSizeWarning: true,
    disableImageLazyLoadWarning: true,
  },
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), disableImageWarningsProvider],
};
