import React, { Component } from 'react'
import './Box.css';
import { randomArrayElement } from './utils';

class Box extends Component
{


    constructor(props) {
        super(props);
        this.state = {
            currentBg : randomArrayElement(this.props.bgs)
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.generateColor();
    }

    generateColor() {

        let randomBg;

        do{
            randomBg = randomArrayElement(this.props.bgs);
        } while(randomBg === this.state.currentBg)

    
        //on change la valeur du state
        this.setState((st) => ({
            currentBg: randomBg
        }));
    }

    render() {

        return(
            <div onClick={this.handleClick} className="Box" style={{backgroundColor: this.state.currentBg}}>
               
            </div>
        );
    }
}
export default Box;