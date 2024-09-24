import { Injectable } from "@angular/core";
import { IVerifyPostPayload } from "../../../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../../constants/endpoints";
import { map, catchError } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class VerifyPostService {
  constructor(private http: HttpClient, private toast: ToastrService) { }

  verifyUserAskedPost = (payload: IVerifyPostPayload) => {
    return this.http.post(Endpoints.verifyPost, payload).pipe(
      map((response: any) => (response.isSuccess ? response.data : [])),
      catchError(({ error }: any) => {
        this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
        throw error.error;
      })
    );
  };

  getUserAskedPosts() {
    return this.http
      .get(Endpoints.getUserAskedPosts)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      )
  }

}
