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