import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoints';
import { map, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private readonly http: HttpClient, private toast: ToastrService) { }

  //get promises of political parties
  getPromises(shortName: string, startYear: string) {
    return this.http.get(Endpoints.getPromises + shortName + "&startYear=" + startYear)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      );
  }
}
