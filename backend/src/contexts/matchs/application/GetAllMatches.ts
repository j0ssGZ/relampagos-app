import { Match } from '../domain/models/Match';
import { MatchRepository } from '../domain/repositories/MatchRepository';

export class GetAllMatches {
  constructor(private matchRepository: MatchRepository) {}

  async execute(): Promise<Match[]> {
    return this.matchRepository.getAll();
  }
}
