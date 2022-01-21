import React, { Component } from 'react';

class Box extends Component
{
    static defaultProps = {
        bgc: 'gray',
        width: 50,
        height: 50
    }

    render() {

        return(
        <div>
            <div style={{
                width: `${this.props.width}px`,
                height: `${this.props.height}px`,
                backgroundColor: this.props.bgc,

            }}>
            </div>
            <button onClick={this.props.removeItem}>X</button>
        </div>
        )

    }


}

export default Box;


