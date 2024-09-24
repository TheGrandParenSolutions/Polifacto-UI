import { createAction, props } from "@ngrx/store";
import { AppActionTypes } from "./constants";
import { IPolitician, IStatement } from "../../interfaces/interfaces";

export const getPoliticians = createAction(AppActionTypes.GetPoliticians);

export const getPoliticiansSuccess = createAction(
  AppActionTypes.GetPoliticiansSuccess,
  props<{ payload: IPolitician[] }>()
);

export const getPoliticiansError = createAction(
  AppActionTypes.GetPoliticiansError,
  props<{ payload: string }>()
);

export const getStatements = createAction(AppActionTypes.GetStatements);

export const GetStatementsSuccess = createAction(
  AppActionTypes.GetStatementsSuccess,
  props<{ payload: IStatement[] }>()
);

export const GetStatementsError = createAction(
  AppActionTypes.GetStatementsError,
  props<{ payload: string }>()
);
