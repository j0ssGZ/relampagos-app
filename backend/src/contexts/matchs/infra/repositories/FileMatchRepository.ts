import { Match } from '../../domain/models/Match';
import { MatchRepository } from '../../domain/repositories/MatchRepository';
import matches from '../../../../fixtures/matches.json';

export class FileMatchRepository implements MatchRepository {
  async getAll(): Promise<Match[]> {
    return matches as Match[];
  }
}
