import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { inject } from "@angular/core";
import { LoaderService } from "../../shared/services/loader/loader.service";
import { finalize } from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  const loaderService = inject(LoaderService);
  loaderService.showLoader();
  const { BASE_URL } = environment;
  const apiReq = request.clone({ url: `${BASE_URL}${request.url}` });
  return next(apiReq).pipe(
    finalize(() => {
      loaderService.hideLoader();
    })
  );
};
