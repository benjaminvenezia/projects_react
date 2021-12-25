import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';

class BoxesContainer extends Component {

    static defaultProps = {
        bgs:  ['red', 'blue', 'brown', 'yellow', 'green', 'purple', 'lightgreen', 'lightgray', 'pink', 'chocolate', 'cyan', 'crimson'],
        numBoxes: 4
    }

    render() {
            const boxes = Array.from({ length: this.props.numBoxes}).map(() => (
                <Box bgs={this.props.bgs} />
            ));

        return(
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }

}

export default BoxesContainer;