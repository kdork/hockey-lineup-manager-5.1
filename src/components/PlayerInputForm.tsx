import React, { useState } from 'react';

const initialPlayers = [
    { name: 'Hannah', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Pippa', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Isabella', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Noa-Mae-Keet', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Valerie', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Liva', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Suus', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Linnea', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Ophelia', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
    { name: 'Sofie', bestPlayRanking: '', preferredPosition: '', coachPreference: '', attendance: false, isKeeper: false },
];

const PlayerInputForm = () => {
    const [players, setPlayers] = useState(initialPlayers);

    const handleInputChange = (index, field, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index][field] = value;
        setPlayers(updatedPlayers);
    };

    const handleAttendanceChange = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers[index].attendance = !updatedPlayers[index].attendance;
        setPlayers(updatedPlayers);
    };

    const handleKeeperChange = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers[index].isKeeper = !updatedPlayers[index].isKeeper;
        setPlayers(updatedPlayers);
    };

    return (
        <div>
            <h2>Player Input Form</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Best Play Ranking</th>
                        <th>Preferred Position</th>
                        <th>Coach's Preference</th>
                        <th>Attendance</th>
                        <th>Keeper</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>
                                <input
                                    type="number"
                                    value={player.bestPlayRanking}
                                    onChange={(e) => handleInputChange(index, 'bestPlayRanking', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={player.preferredPosition}
                                    onChange={(e) => handleInputChange(index, 'preferredPosition', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={player.coachPreference}
                                    onChange={(e) => handleInputChange(index, 'coachPreference', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={player.attendance}
                                    onChange={() => handleAttendanceChange(index)}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={player.isKeeper}
                                    onChange={() => handleKeeperChange(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerInputForm;