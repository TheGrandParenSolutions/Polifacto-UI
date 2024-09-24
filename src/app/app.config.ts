import { provideAnimations } from "@angular/platform-browser/animations";
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { httpInterceptor } from "./api/http-interceptor/http-interceptor.interceptor";
import { provideToastr } from "ngx-toastr";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { politicianReducers, statementsReducers } from "./redux/reducers/index";
import { PoliticiansEffects } from "./redux/effects/Politicians.effects";
import { AppEffects, store } from "./redux/store";
import { AppRootState } from "./redux/models/AppRootState";
const AppReducers = {
  politicianReducers,
  statementsReducers,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideToastr({
      progressBar: true,
      timeOut: 10000,
    }),
    provideStore<AppRootState>({
      politicianReducers,
      statementsReducers,
    }),
    provideEffects(store.AppEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
