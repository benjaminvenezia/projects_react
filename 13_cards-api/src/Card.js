import React, { Component } from 'react';

 class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rotation: 0
        }
    }

    componentDidMount() {
        const randomValue = (range = 1, unity) => Math.random() * range + unity;

        this.setState({
            rotation: randomValue(180, 'deg'),
            left: randomValue(200, 'px')
        
        })
    }

  render() {


    const cardStyle = {
        position: "absolute",
        top: "200px",
        left: this.state.left,
        transform: `rotate(${this.state.rotation})`
    }

    return <img style={cardStyle} src={this.props.imgUrl}></img>
  }
}

export default Card;