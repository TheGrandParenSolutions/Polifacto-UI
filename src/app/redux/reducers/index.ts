import { createReducer, on } from "@ngrx/store";
import { initialState } from "../store";
import * as AppActions from "../actions/index";
export const politicianReducers = createReducer(
  initialState.politicianReducers,
  on(AppActions.getPoliticians, (state) => ({ ...state })),
  on(AppActions.getPoliticiansSuccess, (state, action) => {
    return {
      ...state,
      politicians: action.payload,
    };
  }),
  on(AppActions.getPoliticiansError, (state, action) => ({
    ...state,
  }))
);
export const statementsReducers = createReducer(
  initialState.statementsReducers,
  on(AppActions.getStatements, (state) => ({ ...state })),
  on(AppActions.GetStatementsSuccess, (state, action) => {
    return {
      ...state,
      statements: action.payload,
    };
  }),
  on(AppActions.GetStatementsError, (state, action) => {
    return {
      ...state,
    };
  })
);
