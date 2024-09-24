import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Endpoints } from "../../constants/endpoints";
import { catchError, map, Observable, of } from "rxjs";
import { ICreatePolitician, IPolitician, IPoliticianWithStatementDetails } from "../../../interfaces/interfaces";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class PoliticiansService {
  constructor(private http: HttpClient, private toast: ToastrService) { }

  getAllPoliticians() {
    return this.http.get(Endpoints.getAllPoliticians).pipe(
      map((response: any) => (response.isSuccess ? response.data : [])),
      catchError(({ error }: any) => {
        this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
        throw error.error;
      })
    );
  }

  getPoliticianById(pid: string): Observable<IPoliticianWithStatementDetails> {
    return this.http.get(Endpoints.getPoliticianByPoliticianId + pid).pipe(
      map((response: any) => (response.isSuccess ? response.data : [])),
      catchError(({ error }: any) => {
        this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
        throw error.error;
      })
    );
  }

  createPolitician(politician: ICreatePolitician): Observable<IPolitician> {
    return this.http.post(Endpoints.createPolitician, politician).pipe(
      map((response: any) => (response.isSuccess ? response.data : [])),
      catchError(({ error }: any) => {
        this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
        throw error.error;
      })
    );
  }
}
