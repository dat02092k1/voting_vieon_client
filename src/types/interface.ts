export interface UsersState {
  email: String;
  password: String;
  isVIP: Boolean;
  role: String;
  votesRemaining: number; // in day
  votes: Vote[];
  lastVoteDate: Date;
  id: String; 
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
  name: string,
  votes: [],
  imgUrl: string,
  description: string,
  candicateId: string,
  _id: string
}

export interface RouteType {
  path: string;
  component: any;
  exact: boolean;
  isPublic: boolean;
};

export interface RapperProp {
  rapper: Rapper 
  index: number 
  handleVote(rapper: Rapper): void
} 

export interface CandicateProp {
  candicateId: string,
}