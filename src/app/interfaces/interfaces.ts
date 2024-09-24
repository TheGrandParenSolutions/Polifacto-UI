export interface IPolitician {
  politicianId: number;
  politicianName: string;
  politicianDesignation: string;
  politicianProfilePic: string;
  politicianParty: string;
  createdAt: Date;
  statementCount: number;
  truthCount: number;
  unTruthCount: number;
  misleadingCount: number;
  unverifiedCount: number;
}

export interface IStatement {
  createdAt: Date;
  statementId: number;
  politicianId: number;
  statementByPolitician: string;
  statementInfo: string;
  statementNiche: string;
  sourceOfStatement: string;
  statementJudgement: string;
  statementCompleteInfo: string;
}

export interface IPromise {
  id: number;
  createdAt: Date;
  promise: string;
  nameOfParty: string;
  startYear: string;
  evaluationType: string;
  shortNameOfParty: string;
  domain: string;
}

export interface IPartyWithPromise {
  id: number;
  createdAt: Date;
  nameOfParty: string;
  shortNameOfParty: string;
  startYear: string;
  endYear: string;
  partyLogo: string;
  totalPromisesCount: number;
  fullfilledPromisesCount: number;
  violatedPromisesCount: number;
  inProgressPromisesCount: number;
  notImplementedPromisesCount: number;
  partlyImplementedPromisesCount: number;
  partyPromises: Array<IPromise>;
}

export interface IStatementAndPolitician {
  createdAt: Date;
  statementId: number;
  politicianId: number;
  statementByPolitician: string;
  statementInfo: string;
  statementNiche: string;
  sourceOfStatement: string;
  statementJudgement: string;
  statementCompleteInfo: string;
  politician: Array<IPolitician>;
}

export interface IPoliticianWithStatementDetails {
  createdAt: Date;
  politicianId: number;
  politicianName: string;
  politicianProfilePic: string;
  politicianDesignation: string;
  statementCount: number;
  politicianParty: string;
  truthCount: number;
  untruthCount: number;
  misleadingCount: number;
  unverifiedCount: number;
  statements: Array<IStatement>;
}

export interface IError {
  errorCode: number;
  errorReason?: string;
}

export interface IGlobalApiResponse {
  statusCode: number;
  isSuccess: boolean;
  isFailure: boolean;
  data: any;
  Error: any;
}

export interface IPoliticalParty {
  shortNameOfParty: string;
  startYear: string;
  nameOfParty: string;
  endYear: string;
  partyLogo: string;
  totalPromisesCount: number;
  fullfilledPromisesCount: number;
  violatedPromisesCount: number;
  inProgressPromisesCount: number;
  notImplementedPromisesCount: number;
  partlyImplementedPromisesCount: number;
}

export interface IVerifyPostPayload {
  userEmail: string;
  postDescription: string;
  postUrl: string;
  politicianId: number;
}

export interface ICreatePolitician {
  politicianName: string;
  politicianDesignation: string;
  politicianProfilePic?: string;
  politicianParty: string;
}
