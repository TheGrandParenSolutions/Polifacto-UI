import { createSelector } from "@ngrx/store";
import { AppRootState } from "../models/AppRootState";

export const selectPoliticians = (state: AppRootState) =>
  state.politicianReducers;

export const politicianSelector = createSelector(selectPoliticians, (state) => {
  return state.politicians;
});

export const selectStatements = (state: AppRootState) =>
  state.statementsReducers;

export const statementsSelector = createSelector(selectStatements, (state) => {
  return state.statements;
});
