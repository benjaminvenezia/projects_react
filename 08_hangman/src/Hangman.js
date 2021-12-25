import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: "apple",
      isWin: false
    };

    this.handleGuess = this.handleGuess.bind(this);

  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {


      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (

        <button
          value={ltr}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr)}
        >
          {ltr}
        </button>
      ));

  
}

  checkVictory(guessed) {

    let arr = this.guessedWord().filter(c => c !== '_');
    let str = Array.from(arr).join('')
   
    if(str === this.state.answer) {

      //JE DOIS CHANGER LA VALEUR DE ISLOSE
      return (
        <div>
          <h2>You WIN!!!! </h2>
          <button>Restart </button>
        </div>
      )
    } else if( this.state.nWrong >= this.props.maxWrong) {
      return (
        <div>
          <h2>You die.</h2>
          <button>Restart </button>
        </div>
      )
    }
  }

  /** render: render game */
  render() {
    
    return (

      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} style={{ border: (this.state.nWrong < this.props.maxWrong ? "10px solid white" : "10px solid red") }} /> 
        <p className='Hangman-word'>{ this.guessedWord()}</p>
        {/* <div className='Hangman-btns'>{this.state.nWrong < this.props.maxWrong ? this.generateButtons() : this.generateEnd()}</div> */}
        <div className='Hangman-btns'>{ !this.state.isWin ? this.generateButtons() : this.checkVictory()}</div>

        {this.checkVictory(this.state.guessed)}

        <p>Life : { this.props.maxWrong - this.state.nWrong}</p>

      </div>
    );
  }
}

export default Hangman;
