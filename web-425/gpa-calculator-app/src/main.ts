/**
 * Title: main.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date Created: 04/28/2024
 * Date Modified: 05/02/2024
 * Description: Entry point for the Angular application. Sets up the environment for production mode and bootstraps the AppModule.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
