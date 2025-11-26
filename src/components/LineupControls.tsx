import React, { useState } from 'react';

const LineupControls = ({ lineups, currentLineupIndex, setCurrentLineupIndex }) => {
    const [substitutesVisible, setSubstitutesVisible] = useState(false);

    const handleNextLineup = () => {
        if (currentLineupIndex < lineups.length - 1) {
            setCurrentLineupIndex(currentLineupIndex + 1);
        }
    };

    const handlePreviousLineup = () => {
        if (currentLineupIndex > 0) {
            setCurrentLineupIndex(currentLineupIndex - 1);
        }
    };

    const toggleSubstitutes = () => {
        setSubstitutesVisible(!substitutesVisible);
    };

    return (
        <div className="lineup-controls">
            <h2>Current Lineup</h2>
            <div>
                <button onClick={handlePreviousLineup} disabled={currentLineupIndex === 0}>
                    Previous Lineup
                </button>
                <button onClick={handleNextLineup} disabled={currentLineupIndex === lineups.length - 1}>
                    Next Lineup
                </button>
            </div>
            <div>
                <button onClick={toggleSubstitutes}>
                    {substitutesVisible ? 'Hide Substitutes' : 'Show Substitutes'}
                </button>
            </div>
            {substitutesVisible && (
                <div className="substitutes">
                    <h3>Substitutes</h3>
                    {/* Render substitutes here */}
                </div>
            )}
        </div>
    );
};

export default LineupControls;