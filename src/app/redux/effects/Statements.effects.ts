import { StatementsService } from "./../../api/services/statements/statements.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppActionTypes } from "../actions/constants";
import { mergeMap, map, catchError, of } from "rxjs";
import * as AppActions from "../actions";

@Injectable()
export class StatementsEffects {
  constructor(
    private statementsService: StatementsService,
    private actions$: Actions
  ) {}

  getStatements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActionTypes.GetStatements),
      mergeMap(() => {
        return this.statementsService.getStatementsWithPolitician().pipe(
          map((statements) =>
            AppActions.GetStatementsSuccess({
              payload: statements,
            })
          ),
          catchError((error) =>
            of(
              AppActions.GetStatementsError({
                payload: error.message,
              })
            )
          )
        );
      })
    )
  );
}
