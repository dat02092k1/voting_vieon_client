export interface UsersState {
  email: String;
  password: String;
  isVIP: Boolean;
  role: String;
  votesRemaining: number; // in day
  votes: Vote[];
  lastVoteDate: Date;
}

export interface Vote {
  vote_id: String;
}

// Define a type for the slice state
export interface CounterState {
  value: number;
}

export interface ShowContextType {
  setShow(value: boolean): void;
  show: boolean;
}

export interface Rapper {
  name: String,
  votes: [],
  imgUrl: String,
  description: String,
  candicateId: {
      type: String,
  }
}

export type RouteType = {
  path: string;
  component: any;
  exact: boolean;
  isPublic: boolean;
};
