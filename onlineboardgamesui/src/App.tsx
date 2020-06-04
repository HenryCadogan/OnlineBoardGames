import React from 'react';
import './App.css';
import { WinChecker } from './WinChecker';

export enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface State {
  board: Player[]
  turn: Player
  hasWon: Player
}

class App extends React.Component<{}, State>{

  public state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
    turn: Player.One,
    hasWon: Player.None
  }

  public renderCell = (index: number) => {
    return <div className="cell" onClick={this.setCell(index)}>
      {this.getSymbolForPlayer(this.state.board[index])}
    </div>
  }

  private getSymbolForPlayer(player: Player) {
    switch (player) {
      case Player.One: return 'X'
      case Player.Two: return 'O'
      case Player.None: return ''
    }
  }

  public setCell = (index: number) => () => {
    if (this.isValidMove(index)) {
      var currentBoard = this.state.board
      currentBoard[index] = this.state.turn
      this.setState({ board: currentBoard })
      const winChecker = new WinChecker(currentBoard, this.state.turn)
      if (winChecker.checkForWin(index)) {
        this.setWinnerText(`Player ${this.state.turn} has Won!`)
        this.setState({
          hasWon: this.state.turn
        })
      }
      this.nextTurn()
    }
  }

  private isValidMove(index: number) {
    return this.state.board[index] === Player.None && this.state.hasWon === Player.None
  }

  private nextTurn = () => {
    switch (this.state.turn) {
      case Player.One: this.setState({ turn: Player.Two }); break;
      case Player.Two: this.setState({ turn: Player.One }); break;
      default: this.setState({ turn: Player.One })
    }
  }

  public renderBoard = () => {
    return <div className="board-container">
      {this.state.board.map((value, key) => this.renderCell(key))}
    </div>
  }

  private resetGame = () => {
    this.setState({
      board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
      turn: Player.One,
      hasWon: Player.None
    })
    this.setWinnerText("")
  }

  private setWinnerText(text: string) {
    var element: HTMLParagraphElement = (document.getElementsByClassName("Winner")[0] as HTMLParagraphElement)
    element.textContent = text
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Tic Tac Toe</p>
        </header>
        It is Player {this.state.turn}'s turn
        {this.renderBoard()}
        <button className="Reset" onClick={this.resetGame}>Reset Game</button>
        <div className="win-container">
          <p className="Winner" />
        </div>
      </div>
    );
  }
}

export default App;
