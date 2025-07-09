import { Match } from '../models/Match';

export interface MatchRepository {
  getAll(): Promise<Match[]>;
}
