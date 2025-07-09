import { Player } from '../domain/models/Player';
import { PlayerRepository } from '../domain/repositories/PlayerRepository';

export class GetAllPlayersUseCase {
  constructor(private playerRepository: PlayerRepository) {}

  async execute(): Promise<Player[]> {
    return this.playerRepository.getAll();
  }
}
