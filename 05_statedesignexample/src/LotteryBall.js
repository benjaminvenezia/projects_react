import React, { Component } from 'react'
import  './LotteryBall.css';

class LotteryBall extends Component 
{
   
    render() {
        return <span className="LotteryBall">{this.props.num}</span>   
    }
}

export default LotteryBall;