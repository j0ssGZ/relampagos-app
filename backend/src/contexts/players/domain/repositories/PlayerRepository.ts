import { Player } from '../models/Player';

export interface PlayerRepository {
  getAll(): Promise<Player[]>;
}
