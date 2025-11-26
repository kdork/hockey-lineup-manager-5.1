# Hockey Lineup Manager

## Overview
The Hockey Lineup Manager is a React application designed to help coaches and players manage hockey lineups efficiently. It allows for the input of player names, rankings, attendance, and role assignments, while also providing a visual representation of player positions on a half hockey field.

## Features
- Input player names with rankings in three categories: Best Play, Preferred Position, and Coach's Preference.
- Attendance checkboxes for each player.
- Assign a "Keeper" role to a player.
- Visual representation of a half hockey field layout with player positions.
- Dynamic updates to player names and rankings.
- Ability to switch between different lineups and view substitutes.

## Project Structure
```
hockey-lineup-manager
├── src
│   ├── components
│   │   ├── PlayerInputForm.tsx
│   │   ├── PlayerList.tsx
│   │   ├── FieldLayout.tsx
│   │   ├── LineupControls.tsx
│   │   └── PlayerCard.tsx
│   ├── models
│   │   ├── Player.ts
│   │   └── Lineup.ts
│   ├── services
│   │   ├── LineupOptimizer.ts
│   │   └── StorageService.ts
│   ├── styles
│   │   ├── Field.css
│   │   └── App.css
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hockey-lineup-manager
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.
3. Use the Player Input Form to add player names and their rankings.
4. Check attendance and assign roles as needed.
5. View the half hockey field layout to see player positions.
6. Utilize the Lineup Controls to switch between different lineups.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.