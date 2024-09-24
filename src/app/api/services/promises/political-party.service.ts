import { catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoints';
import { IPoliticalParty } from '../../../interfaces/interfaces';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyTsService {

  constructor(private readonly http: HttpClient, private toast: ToastrService) { }

  getAllPoliticalParties() {
    return this.http.get(Endpoints.getAllPoliticalParties)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      );
  }
}
