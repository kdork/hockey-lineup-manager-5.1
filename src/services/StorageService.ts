import { Player } from '../models/Player';

class StorageService {
    private static storageKey = 'hockeyPlayers';

    static savePlayers(players: Player[]): void {
        const playersData = JSON.stringify(players);
        localStorage.setItem(this.storageKey, playersData);
    }

    static loadPlayers(): Player[] {
        const playersData = localStorage.getItem(this.storageKey);
        if (playersData) {
            return JSON.parse(playersData) as Player[];
        }
        return [];
    }

    static clearPlayers(): void {
        localStorage.removeItem(this.storageKey);
    }
}

export default StorageService;