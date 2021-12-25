import React, { Component } from 'react'
import './css/Die.css';

class Die extends Component 
{
    render() {
         
        let numberDice = '';

        switch(this.props.face) {
            case 1: numberDice = "one"; break;
            case 2: numberDice = "two"; break;
            case 3: numberDice = "three"; break;
            case 4: numberDice = "four"; break;
            case 5: numberDice = "five"; break;
            case 6: numberDice = "six"; break;
            default:<p>Problème</p>; break;
        }
       
        return(
            <div className={`Die ${this.props.rolling ? 'shaking' : ''}`}>
                 <i className={`fas fa-dice-${numberDice} `}></i>
                 <p>{this.props.rolling}</p>
            </div>
        )
    }
}

export default Die;