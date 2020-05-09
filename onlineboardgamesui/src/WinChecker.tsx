export { }

import {Player} from './App'

const rows = new Map()
rows.set(0, [0, 1, 2])
rows.set(1, [3, 4, 5])
rows.set(2, [6, 7, 8])

const columns = new Map()
columns.set(0, [0, 3, 6])
columns.set(1, [1, 4, 7])
columns.set(2, [2, 5, 8])

const diagonals = new Map()
diagonals.set(0, [0, 4, 8])
diagonals.set(1, [2, 4, 6])

class WinChecker {

    public checkForWin = (board: Player[], recentMoveIndex: number, player: Player): Player => {
        var row = this.getRowForIndex(recentMoveIndex)
        var column = this.getRowForIndex(recentMoveIndex)
        return Player.One
    }

    private isRowWin(row: number, player: Player){
        var rowIndexes = rows.get(row)
        return rowIndexes.every((value: Player) => {value === player})
    }
    
    private isColumnWin(column: number, player: Player){
        var columnIndexes = rows.get(column)
        return columnIndexes.every((value: Player) => {value === player})
    }

    private isDiagonalWin(diagonal: number, player: Player){
        var diagonalIndexes = rows.get(diagonal)
        return diagonalIndexes.every((value: Player) => {value === player})
    }

    private getRowForIndex(index: number) {
        rows.forEach((value :number[], key: number) => {
            if (value.includes(index)) return key
        })
    }

    private getColumnForIndex(index: number) {
        columns.forEach((value :number[], key: number) => {
            if (value.includes(index)) return key
        })
    }

    private isDiagonal(index: number) {
        var flattenedDiagonals: number[] = []
        diagonals.forEach(diagonal => {
            diagonal.values.forEach((value: number) => {
                flattenedDiagonals.push(value)
            })
        })
        return flattenedDiagonals.includes(index)
    }
}

export {WinChecker}