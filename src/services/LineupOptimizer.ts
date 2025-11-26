import { Player } from '../models/Player';
import { Lineup } from '../models/Lineup';

export class LineupOptimizer {
    private players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    public calculateOptimalLineup(): Lineup {
        // Sort players based on their rankings
        const sortedPlayers = this.players.sort((a, b) => {
            const totalRankingA = a.bestPlayRanking + a.preferredPositionRanking + a.coachPreferenceRanking;
            const totalRankingB = b.bestPlayRanking + b.preferredPositionRanking + b.coachPreferenceRanking;
            return totalRankingB - totalRankingA; // Descending order
        });

        // Create a lineup with the top players
        const optimalLineup = new Lineup();
        for (let i = 0; i < Math.min(11, sortedPlayers.length); i++) {
            optimalLineup.addPlayer(sortedPlayers[i]);
        }

        return optimalLineup;
    }

    public switchLineup(currentLineup: Lineup): Lineup {
        // Logic to switch lineups can be implemented here
        // For now, we will just return the current lineup
        return currentLineup;
    }
}