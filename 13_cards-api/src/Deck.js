import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

 class Deck extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isLoaded: false,
          deck: [],
          deckId: undefined,
          remaining: 1,
          cardImg: ''

      }

      this.drawCard = this.drawCard.bind(this);
  }
  componentDidMount() {
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  isLoaded: true,
                  
                  deckId: result.deck_id,
                  cardImg: ''
              });
          },
      
      (error) => {
          this.setState({
              isLoaded: true,
              error          
        });
      }
      )
  }

  drawCard() {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
        
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState( prevState => ({
                    cardImg: result.cards[0].image,
                    remaining: result.remaining,
                    deck: [...prevState.deck, result.cards]
                }))
            
            },
            (error) => {
                this.setState({
                    error          
            });
            }
        )
    }
  

  render() {
    const { error, isLoaded, remaining, items, deckId } = this.state;
    const cards = this.state.deck.map(card => <Card key={card[0].code} alt={card[0].code} imgUrl={card[0].image}/>)
    console.log("cards:", cards);

    if(error) {
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Chargement...</div>
    } else{
        return (
            remaining > 0 ?
                <div className='Deck'>
                    <button onClick={this.drawCard}>Gimme a card!</button>
                    {cards} 
                </div> :
                <div>
                    <h1>No cards</h1>
                </div>
        );
    }
   
  }

}
export default Deck;
