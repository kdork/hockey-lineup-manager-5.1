import React, { useState } from 'react';
import PlayerInputForm from './components/PlayerInputForm';
import PlayerList from './components/PlayerList';
import FieldLayout from './components/FieldLayout';
import LineupControls from './components/LineupControls';
import './styles/App.css';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [currentLineup, setCurrentLineup] = useState([]);
    const [lineups, setLineups] = useState([]);

    const addPlayer = (player) => {
        setPlayers([...players, player]);
    };

    const updatePlayer = (updatedPlayer) => {
        setPlayers(players.map(player => player.name === updatedPlayer.name ? updatedPlayer : player));
    };

    const calculateOptimalLineups = () => {
        // Logic to calculate optimal lineups based on player rankings
        // This will update the lineups state
    };

    const switchLineup = (index) => {
        setCurrentLineup(lineups[index]);
    };

    return (
        <div className="App">
            <h1>Hockey Lineup Manager</h1>
            <PlayerInputForm addPlayer={addPlayer} />
            <PlayerList players={players} updatePlayer={updatePlayer} />
            <FieldLayout lineup={currentLineup} />
            <LineupControls lineups={lineups} switchLineup={switchLineup} />
            <button onClick={calculateOptimalLineups}>Calculate Optimal Lineups</button>
        </div>
    );
};

export default App;