import { Player } from '../App'
import { WinChecker } from '../WinChecker'
import { TestHelper } from './TestHelper'

test('row 0 should be a win', () => {
    var board = TestHelper.boardOf([0,1,2])
    var checker = new WinChecker(board,Player.One)
    expect(checker.checkForWin(0)).toBe(true)
    expect(checker.checkForWin(1)).toBe(true)
    expect(checker.checkForWin(2)).toBe(true)
})

test('row 1 should be a win', () => {
    var board = TestHelper.boardOf([3,4,5])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(3)).toBe(true)
    expect(checker.checkForWin(4)).toBe(true)
    expect(checker.checkForWin(5)).toBe(true)
})

test('row 2 should be a win', () => {
    var board = TestHelper.boardOf([6,7,8])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(6)).toBe(true)
    expect(checker.checkForWin(7)).toBe(true)
    expect(checker.checkForWin(8)).toBe(true)
})

test('Column 0 should be a win', () => {
    var board = TestHelper.boardOf([0,3,6])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(0)).toBe(true)
    expect(checker.checkForWin(3)).toBe(true)
    expect(checker.checkForWin(6)).toBe(true)
})

test('Column 1 should be a win', () => {
    var board = TestHelper.boardOf([1,4,7])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(1)).toBe(true)
    expect(checker.checkForWin(4)).toBe(true)
    expect(checker.checkForWin(7)).toBe(true)
})

test('Column 2 should be a win', () => {
    var board = TestHelper.boardOf([2,5,8])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(2)).toBe(true)
    expect(checker.checkForWin(5)).toBe(true)
    expect(checker.checkForWin(8)).toBe(true)
})

test('Diagonal 1 should be a win', () => {
    var board = TestHelper.boardOf([0,4,8])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(0)).toBe(true)
    expect(checker.checkForWin(4)).toBe(true)
    expect(checker.checkForWin(8)).toBe(true)
})

test('Diagonal 2 should be a win', () => {
    var board = TestHelper.boardOf([2,4,6])
    var checker = new WinChecker(board, Player.One)
    expect(checker.checkForWin(2)).toBe(true)
    expect(checker.checkForWin(4)).toBe(true)
    expect(checker.checkForWin(6)).toBe(true)
})

