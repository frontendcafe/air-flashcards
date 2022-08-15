export enum StudySessionMode {
  NORMAL = "normal",
  JEOPARDY = "jeopardy",
  COMBINED = "combined",
}

export interface StudySessionResultData {
  question: string;
  answer: string;
  cardRef: string;
  correct: boolean;
}

export interface StudySessionResult extends StudySessionResultData {
  id: string;
}

export interface StudySessionData {
  mode: StudySessionMode;
  date: string;
  completed: boolean;
  cardsAmount: number;
}

export interface StudySession extends StudySessionData {
  id: string;
  results: StudySessionResult[];
}
