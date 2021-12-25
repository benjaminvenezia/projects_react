import React, { Component } from 'react'
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component
{
    static defaultProps = {
        title: "Undefined",
        numBalls: 1,
        maxnum: 1,
    };

    constructor(props) {
        super(props);
        this.state = { 
            ballsVar : Array.from({ length: this.props.numBalls }) 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(curState => ({
          ballsVar: curState.ballsVar.map(
            n => Math.floor(Math.random() * this.props.maxnum) + 1
          )
        }));
      }
    
    handleClick() {
        this.generate();
    }

    render() {

        return (
            <section className="Lottery">
                <div className="Lottery-infos">
                    <p>Nombre de balles : {this.props.numBalls}</p>
                    <p>Maximum pour chaque balle : {this.props.maxnum}</p>
                </div>

                <h1>{this.props.title}</h1>
                <div className="Lottery-container">
                    {this.state.ballsVar.map(n => (
                        <LotteryBall num={n} />
                    ))}
                </div> 
                    <button className="Lottery-button" onClick={this.handleClick}>générer le tirage</button>
            </section>
        );
    }
}

export default Lottery;
