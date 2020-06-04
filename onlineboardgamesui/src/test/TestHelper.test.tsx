import { Player } from '../App';
import { TestHelper } from './TestHelper';

test('it should make a board of nones from an empty list of indexes', () => {
    var expected: Player[] = [Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None]
    var actualboard = TestHelper.boardOf([])
    expect(actualboard).toEqual(expected)
    expect(actualboard).toHaveLength(9)
})

test('it should make a board full of player 1s from a list of indexes 0..8', () => {
    var expected: Player[] = [Player.One,Player.One,Player.One,Player.One,Player.One,Player.One,Player.One,Player.One,Player.One]
    const actual = TestHelper.boardOf([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(actual).toStrictEqual(expected)
})

test('it should error if too many indexes are given', () => {
    expect(() => {TestHelper.boardOf([0,1,2,3,4,5,6,7,8,9])}).toThrowError()
})