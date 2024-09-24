import { Action, ActionReducerMap } from "@ngrx/store";
import { PoliticiansEffects } from "./effects/Politicians.effects";
import { AppRootState } from "./models/AppRootState";
import { politicianReducers } from "./reducers";
import { StatementsEffects } from "./effects/Statements.effects";

export const initialState: AppRootState = {
  politicianReducers: {
    politicians: [],
  },
  statementsReducers: {
    statements: [],
  },
};

export const AppEffects = [PoliticiansEffects, StatementsEffects];

export const store = {
  AppEffects,
  initialState,
};
