import React from 'react';
import './App.css';

export enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface State {
  board: Player[]
  turn: Player
}

class App extends React.Component<{}, State>{

  public state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
    turn: Player.One,
    hasWon: null
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
      this.nextTurn()
    }
  }

  private isValidMove(index: number) {
    return this.state.board[index] === Player.None
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
      turn: Player.One
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Tic Tac Toe</p>
        </header>
        It is Player {this.state.turn}'s turn
        {this.renderBoard()}
        <button className="Reset" onClick={this.resetGame}/>
      </div>
    );
  }
}

export default App;
