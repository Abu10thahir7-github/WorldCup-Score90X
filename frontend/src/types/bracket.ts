import { Match } from "./match";

export interface BracketMatch extends Match {
  stage: string;
  matchday: number | null;
}

export interface BracketNode extends BracketMatch {
  leftSource?: number;
  rightSource?: number;
}

export interface BracketRounds {
  roundOf32: BracketNode[];
  roundOf16: BracketNode[];
  quarterFinals: BracketNode[];
  semiFinals: BracketNode[];
  thirdPlace: BracketNode[];
  final: BracketNode[];
}