import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { disableImageWarningsProvider } from './common';

export const appConfig: ApplicationConfig = {
  providers: [
    disableImageWarningsProvider(),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
