import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Endpoints } from "../../constants/endpoints";
import { catchError, map, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class StatementsService {
  constructor(private readonly http: HttpClient, private toast: ToastrService) { }

  getStatementsWithPolitician = (): Observable<any> => {
    return this.http
      .get(Endpoints.getAllStatementsWithPolitician)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      );
  };

  getStatementByStatementId(sid: string) {

    return this.http
      .get(Endpoints.getStatementByStatementId + sid)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      );
  }
}
