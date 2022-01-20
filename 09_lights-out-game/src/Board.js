import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 * 
 * 
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/


class Board extends Component {

  static defaultProps = {
    nrows : 5,
    ncols : 5,
    chanceLightStartsOn: 0.25,
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
   this.state = {
     hasWon: false,
     board: this.createBoard()
   }

   this.flipCellsAround = this.flipCellsAround.bind(this);
   this.reset = this.reset.bind(this);

  }

  reset() {
    this.setState({
     hasWon: false,
     board: this.createBoard()
    })
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
 
    let isLit = () => Math.random() < this.props.chanceLightStartsOn ? true : false;

    let board = [];
    // TODO: create array-of-arrays of true/false values

    for(let i = 0; i < this.props.nrows; i++) {
        let boardRow = [];
        for(let j = 0; j < this.props.ncols; j++) {
          boardRow.push(isLit());
        }
      board.push(boardRow);
    }

    // this.setState(st => ({
    //   board: st.board
    // }));

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x]; //false become true and true false
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y , x - 1);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    // let oneCellIsTrue = false;

    // for(let i = 0; i < board.length; i++) {
    //   for(let j = 0; j < board.length; j++) {
    //     if(board[i][j]) {
    //       oneCellIsTrue = true;
    //     }
    //   }
    // }

    let hasWon = board.every( row => row.every(cell => !cell));

    this.setState({
      board, 
      hasWon: hasWon
    });
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    
 
    // TODO

    // make table board
    const boardGame = this.state.board.map((arr, i) => {                              //v----- arrow function allow add args
    return <tr key={`row-${i}`}>{arr.map((b, j) => <Cell isLit={b} flipCellsAroundMe={() => this.flipCellsAround(`${i}-${j}`)} key={`${i}-${j}`} />)}</tr>
    })

    const winMsg = (
      <span>
        <h1>You win!</h1>
        <button className="Board-button" onClick={this.reset}>Restart ?</button>
      </span>
    )

    // TODO
    return (
      <div>
        {!this.state.hasWon && <h1>Lightout game</h1>}
        <table className="Board">
          <tbody>
            {!this.state.hasWon ? boardGame : winMsg}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;
