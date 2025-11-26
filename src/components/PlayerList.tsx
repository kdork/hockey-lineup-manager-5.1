import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players, onPlayerUpdate }) => {
    return (
        <div className="player-list">
            {players.map((player, index) => (
                <PlayerCard 
                    key={index} 
                    player={player} 
                    onUpdate={(updatedPlayer) => onPlayerUpdate(index, updatedPlayer)} 
                />
            ))}
        </div>
    );
};

export default PlayerList;