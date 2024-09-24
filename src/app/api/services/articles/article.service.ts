import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoints';
import { map, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private toast: ToastrService) {

  }

  getAllArticles() {
    return this.http
      .get(Endpoints.getAllArticles)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      )
  }

  getArticleById(articleId: string | number) {
    return this.http
      .get(Endpoints.getArticleById + articleId)
      .pipe(
        map((response: any) => (response.isSuccess ? response.data : [])),
        catchError(({ error }: any) => {
          this.toast.error(error?.error?.errorReason ?? "Oops! Service Unavailable. Please try again.")
          throw error.error;
        })
      )
  }
}
