import { IPolitician, IStatement } from "../../interfaces/interfaces";

export interface AppRootState {
  politicianReducers: {
    politicians: IPolitician[];
  };
  statementsReducers: {
    statements: IStatement[];
  };
}
