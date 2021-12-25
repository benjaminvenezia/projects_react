import React, { Component } from 'react'
import {randomArrayElement} from './utils';
import Coin from './Coin';

class CoinContainer extends Component
{

    static defaultProps = {
        coin : [
            {name: 'head', face: 'https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg'},
            {name: 'tail', face: 'https://i.ucoin.net/coin/22/654/22654386-2/usa-1-4-dollar-1967.jpg'}
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            currentCoin: '',
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    flip() {

        let newCoin = randomArrayElement(this.props.coin)
     
        this.setState(st => ({
            nFlips : st.nFlips + 1,
            currentCoin: newCoin,
            nHeads: st.nHeads + (newCoin.name === 'head' ? 1 : 0),
            nTails: st.nTails + (newCoin.name === 'tail' ? 1 : 0),
        }));
    }

    handleClick() {
        this.flip();
    }

    render() {
        return(
            <div>

                <Coin infos={this.state.currentCoin}/>
                
                <h1>Flip the coin</h1>

                <p>Flips : {this.state.nFlips}</p>
                <p>Head : {this.state.nHeads}</p>
                <p>Tails : {this.state.nTails}</p>

                
                <button onClick={this.handleClick} >Flip</button>
            </div>
        )
    }
}

export default CoinContainer;