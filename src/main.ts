import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { apiBaseUrlInterceptor } from './app/api-base-url.interceptor';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, { providers: [provideHttpClient(withInterceptors([apiBaseUrlInterceptor])), provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' }))] }).catch(err => console.error(err));
