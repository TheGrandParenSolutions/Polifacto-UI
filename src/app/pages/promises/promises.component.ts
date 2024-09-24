import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { PromiseRatingComponent } from "../../components/promise-rating/promise-rating.component";
import { CommonModule, NgFor, PercentPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PromiseRatings } from "../../utils/Promises/PromiseRatingConf";
import { PromiseRatingKey } from "../../utils/constants/enums";
import { GovernmentalPromiseComponent } from "../../components/governmental-promise/governmental-promise.component";
import { HttpClient } from "@angular/common/http";
import { PromiseService } from "../../api/services/promises/promise.service";
import { error } from "jquery";
import { IPoliticalParty } from "../../interfaces/interfaces";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-promises",
  standalone: true,
  imports: [
    PromiseRatingComponent,
    CommonModule,
    FormsModule,
    GovernmentalPromiseComponent,
    NgFor,
  ],
  templateUrl: "./promises.component.html",
  styleUrl: "./promises.component.scss",
})
export class PromisesComponent {
  shortName: string = "";
  startYear: string = "";
  partyPromise: any;
  promiseJudgementType: any;
  judgementWidth: number | undefined;
  public Object = Object;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly promiseService: PromiseService
  ) {}

  get promiseRatingKeyGetter() {
    return PromiseRatingKey;
  }

  getPromiseRating(s: string) {
    return PromiseRatings.Fulfilled;
  }

  getPromiseRatingClass(ratingType: string) {
    const bColor = this.getPromiseRating(ratingType).backgroundColor;
    return { [bColor]: true };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.shortName = params["party"];
      this.startYear = params["startYear"];

      this.promiseService
        .getPromises(this.shortName, this.startYear)
        .subscribe({
          next: (response: any) => {
            this.partyPromise = response;
            this.getPromiseJudgementTypeList();
          },
          error: (error: any) => {
            console.log(error);
          },
        });
    });
  }

  getPromiseJudgementTypeList() {
    this.promiseJudgementType = {
      fullfilled: this.partyPromise?.fullfilledPromisesCount,
      violated: this.partyPromise?.violatedPromisesCount,
      inProgress: this.partyPromise?.inProgressPromisesCount,
      notImplemented: this.partyPromise?.notImplementedPromisesCount,
      partlyImplemented: this.partyPromise?.partlyImplementedPromisesCount,
    };
  }

  calculateJudgementResult(judgementCount: string) {
    this.judgementWidth = 2;
    return "";
  }

  setWidth(judgementName: string, judgementValue: string) {
    let width = 0;
    switch (judgementName) {
      case "fullfilled": {
        width = this.calculateWidth(+judgementValue);
        break;
      }
      case "violated": {
        width = this.calculateWidth(+judgementValue);
        break;
      }
      case "inProgress": {
        width = this.calculateWidth(+judgementValue);
        break;
      }
      case "notImplemented": {
        width = this.calculateWidth(+judgementValue);
        break;
      }
      case "partlyImplemented": {
        width = this.calculateWidth(+judgementValue);
        break;
      }
    }
    return width?`${width}%`: 0;
  }

  setBgColor(judgementName: string, judgementValue: string) {
    let color = "";
    switch (judgementName) {
      case "fullfilled": {
        color = PromiseRatings.Fulfilled.backgroundColor;
        break;
      }
      case "violated": {
        color = PromiseRatings.Violated.backgroundColor;
        break;
      }
      case "inProgress": {
        color = PromiseRatings.InProgress.backgroundColor;
        break;
      }
      case "notImplemented": {
        color = PromiseRatings.NotImplemented.backgroundColor;
        break;
      }
      case "partlyImplemented": {
        color = PromiseRatings.PartlyImplemented.backgroundColor;
        break;
      }
    }
    return color;
  }

  setTextColor(judgementName: string, judgementValue: string) {
    let color = "";
    switch (judgementName) {
      case "fullfilled": {
        color = PromiseRatings.Fulfilled.textColor;
        break;
      }
      case "violated": {
        color = PromiseRatings.Violated.textColor;
        break;
      }
      case "inProgress": {
        color = PromiseRatings.InProgress.textColor;
        break;
      }
      case "notImplemented": {
        color = PromiseRatings.NotImplemented.textColor;
        break;
      }
      case "partlyImplemented": {
        color = PromiseRatings.PartlyImplemented.textColor;
        break;
      }
    }
    return color;
  }

  calculateWidth(value: number) {
    const total = +this.partyPromise?.totalPromisesCount;
    return (value / (total ?? 1)) * 100;                                      
  }
}

//////////////update interfaces and fix promise dropdown not redirecting while on prommises page//////////////////////////
