import React, { Component } from 'react'
import './Coin.css';

class Coin extends Component 
{
    render() {

        return <img className="Coin-img" src={this.props.infos.face} />;

        
    }

}

export default Coin;