import React from 'react';
import './Field.css';

// 1. Define the shape of a single player
interface Player {
    name: string;
    // Add other player properties here if needed (e.g., id, number)
}

// 2. Define the props for the component
interface FieldLayoutProps {
    players: Player[];
}

// 3. Apply the interface to the component
const FieldLayout: React.FC<FieldLayoutProps> = ({ players }) => {
    return (
        <div className="field-layout">
            <div className="goal" />
            <div className="field">
                <div className="positions">
                    {/* Optional chaining (?.) prevents crashes if the array is shorter than expected */}
                    <div className="position" style={{ top: '10%', left: '40%' }}>{players[0]?.name}</div>
                    <div className="position" style={{ top: '10%', left: '30%' }}>{players[1]?.name}</div>
                    <div className="position" style={{ top: '10%', left: '50%' }}>{players[2]?.name}</div>
                    <div className="position" style={{ top: '20%', left: '20%' }}>{players[3]?.name}</div>
                    <div className="position" style={{ top: '20%', left: '40%' }}>{players[4]?.name}</div>
                    <div className="position" style={{ top: '20%', left: '60%' }}>{players[5]?.name}</div>
                    <div className="position" style={{ top: '30%', left: '30%' }}>{players[6]?.name}</div>
                    <div className="position" style={{ top: '30%', left: '50%' }}>{players[7]?.name}</div>
                    <div className="position" style={{ top: '30%', left: '70%' }}>{players[8]?.name}</div>
                    <div className="position" style={{ top: '40%', left: '40%' }}>{players[9]?.name}</div>
                    <div className="position" style={{ top: '50%', left: '40%' }}>{players[10]?.name}</div>
                </div>
            </div>
        </div>
    );
};

export default FieldLayout;