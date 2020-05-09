import {Player} from '../App'
import {WinChecker} from '../WinChecker'

test('row 0 should be a win', () => {
    var board = [Player.One, Player.One, Player.One, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None]
    var checker = new WinChecker()
    expect(checker.checkForWin(board, 0, Player.One)).toEqual(Player.One)
})