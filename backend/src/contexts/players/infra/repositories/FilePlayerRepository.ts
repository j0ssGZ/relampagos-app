import { Player } from '../../domain/models/Player';
import { PlayerRepository } from '../../domain/repositories/PlayerRepository';
import players from '../../../../fixtures/players.json';

export class FilePlayerRepository implements PlayerRepository {
  async getAll(): Promise<Player[]> {
    return players as Player[];
  }
}
