import { Player } from '../App';

export class TestHelper {

    static boardOf(playedIndexes: number[]): Player[] {
        const emptyBoard: Player[] = [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None];
        if (playedIndexes.length === 0) { return emptyBoard }
        if (playedIndexes.length > 9) { throw new RangeError(`${playedIndexes.length} is too many arguments. Max is 9`) }
        playedIndexes.forEach((index: number) => {
            emptyBoard[index] = Player.One;
        });
        return emptyBoard;
    }
}
