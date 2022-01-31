import React, { Component } from 'react';
import Vote from './Vote';
import SmileysGrade from './SmileysGrade';
import './Joke.css';

class Joke extends Component {
  
  constructor(props){
      super(props);

      this.state = {
        n: 0
      }

      this.incrementNote = this.incrementNote.bind(this);
      this.decrementNote = this.decrementNote.bind(this);
  }

  incrementNote(newNumber) {
    this.setState({
        n : newNumber
    });
}

  decrementNote(newNumber) {
      this.setState({
          n : newNumber
      });
  }

  render() {
    return (
    <article className='Joke'>
        <div className='Joke-container'>
            <Vote incrementNote={this.incrementNote} decrementNote={this.decrementNote} n={this.state.n}/>
            <p className='Joke-text'>{this.props.jokeContent}</p>
            <p className='Joke-smiley'><SmileysGrade nVote={this.state.n}/></p>
        </div> 
    </article>
    
    );
  }
}

export default Joke;
