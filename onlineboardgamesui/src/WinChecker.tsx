import { Player } from './App'

const rows: Map<number, number[]> = new Map()
rows.set(0, [0, 1, 2])
rows.set(1, [3, 4, 5])
rows.set(2, [6, 7, 8])

const columns: Map<number, number[]> = new Map()
columns.set(0, [0, 3, 6])
columns.set(1, [1, 4, 7])
columns.set(2, [2, 5, 8])

const diagonals: Map<number, number[]> = new Map()
diagonals.set(0, [0, 4, 8])
diagonals.set(1, [2, 4, 6])

class WinChecker {
    board: Player[];
    player: Player;
    constructor(board: Player[], player: Player) {
        this.board = board;
        this.player = player
    }

    public checkForWin = (recentMoveIndex: number): Boolean => {
        const row = this.getRowForIndex(recentMoveIndex)
        const column = this.getColumnForIndex(recentMoveIndex)
        return this.isWin(row, column, this.player)
    }

    private isWin(row: number, column: number, player: Player): Boolean {

        return this.isRowWin(row, player) || this.isColumnWin(row, player) || this.isDiagonalWin(row, column, player)
    }

    private isRowWin(row: number, player: Player): boolean {
        return rows.get(row)?.every((value: number) => this.board[value] == player)!
    }

    private isColumnWin(column: number, player: Player) {
        return columns.get(column)?.every((value: number) => this.board[value] === player )
    }

    private isDiagonalWin(row: number, column: number, player: Player): boolean {
        if (!this.isDiagonal) return false
        const diag0: boolean = diagonals.get(0)?.every((value: number) =>  this.board[value] == player )!
        const diag1: boolean = diagonals.get(1)?.every((value: number) =>  this.board[value] == player )!
        return diag0 || diag1
    }

    private getRowForIndex(index: number): number {
        var row = -1
        rows.forEach((value: number[], key: number) => {
            if (value.includes(index)) row = key
        })
        return row
    }

    private getColumnForIndex(index: number): number {
        var column = -1
        columns.forEach((value: number[], key: number) => {
            if (value.includes(index)) column = key
        })
        return column
    }

    private isDiagonal(index: number) {
        if (index == 4) return true
        var flattenedDiagonals: number[] = [0, 2, 4, 6, 8]
        return flattenedDiagonals.includes(index)
    }
}

export { WinChecker }