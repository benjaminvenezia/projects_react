import React, { Component } from 'react';
import './Vote.css';

 class Vote extends Component {

    constructor(props) {
        super(props);

        this.state = {
       
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);

    }

    handleIncrement() {
        {this.props.incrementNote(this.props.n + 1)}
    }

    handleDecrement() {
        {this.props.decrementNote(this.props.n - 1)}
    }

   
  render() {
    const {n} = this.props;
    let colorBorder = undefined;

    if(n < 4) {
        colorBorder = 'red';
    } else if(n < 7) {
        colorBorder = 'orange';
    } else if(n < 11) {
        colorBorder = 'limon';
    } else if(n < 14) {
        colorBorder = 'lightgreen';
    } else {
        colorBorder = 'green';
    }
 
    let border = {border: `2px solid ${colorBorder}`};
        
    return (
    <div className='Vote'>
        <button onClick={this.handleIncrement} className='Vote-button'><i className="fas fa-arrow-up"></i></button>
        <span style={border} className='Vote-round' > 
            {this.props.n}
        </span>
        <button onClick={this.handleDecrement} className='Vote-button'><i className="fas fa-arrow-down"></i></button>
    </div>);
  }
}

export default Vote;