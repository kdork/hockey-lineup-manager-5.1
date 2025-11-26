class Player {
    constructor(name, bestPlayRanking, preferredPositionRanking, coachPreferenceRanking, attendance = false, isKeeper = false) {
        this.name = name;
        this.bestPlayRanking = bestPlayRanking;
        this.preferredPositionRanking = preferredPositionRanking;
        this.coachPreferenceRanking = coachPreferenceRanking;
        this.attendance = attendance;
        this.isKeeper = isKeeper;
    }

    toggleAttendance() {
        this.attendance = !this.attendance;
    }

    setKeeper(isKeeper) {
        this.isKeeper = isKeeper;
    }
}

export default Player;