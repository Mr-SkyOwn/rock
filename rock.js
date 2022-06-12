function computerPlay() {
    const opponent = Math.random();

    if (opponent < 0.33) {
        return Rock;
    } else if (opponent > 0.66) {
        return Paper;
    } else {
        return Scissors;
    }

}