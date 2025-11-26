import React from 'react';

interface PlayerCardProps {
    name: string;
    bestPlayRanking: number;
    preferredPositionRanking: number;
    coachPreferenceRanking: number;
    attendance: boolean;
    isKeeper: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
    name, 
    bestPlayRanking, 
    preferredPositionRanking, 
    coachPreferenceRanking, 
    attendance, 
    isKeeper 
}) => {
    return (
        <div className="player-card">
            <h3>{name}</h3>
            <p>Best Play Ranking: {bestPlayRanking}</p>
            <p>Preferred Position Ranking: {preferredPositionRanking}</p>
            <p>Coach's Preference Ranking: {coachPreferenceRanking}</p>
            <p>Attendance: {attendance ? 'Present' : 'Absent'}</p>
            <p>Role: {isKeeper ? 'Keeper' : 'Player'}</p>
        </div>
    );
};

export default PlayerCard;