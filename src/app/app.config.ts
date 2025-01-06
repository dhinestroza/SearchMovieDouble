import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './Core/interceptors/interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([interceptorInterceptor])
    )
  ]
};
