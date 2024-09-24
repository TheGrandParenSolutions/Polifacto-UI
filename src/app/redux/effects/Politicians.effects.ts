import { Injectable } from "@angular/core";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppActionTypes } from "../actions/constants";
import { mergeMap, map, catchError, of } from "rxjs";
import * as AppActions from "../actions";

@Injectable()
export class PoliticiansEffects {
  constructor(
    private politicianService: PoliticiansService,
    private actions$: Actions
  ) {}

  getPoliticians$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActionTypes.GetPoliticians),
      mergeMap(() => {
        return this.politicianService.getAllPoliticians().pipe(
          map((politicians) =>
            AppActions.getPoliticiansSuccess({
              payload: politicians,
            })
          ),
          catchError((error) =>
            of(
              AppActions.getPoliticiansError({
                payload: error.message,
              })
            )
          )
        );
      })
    )
  );
}
