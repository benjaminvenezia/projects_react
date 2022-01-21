import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';


class BoxList extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);


    }

    addItem(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    removeItem(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => 
        <Box 
        key={box.id} 
        id={box.id}
        bgc={box.bgc} 
        width={box.width} 
        height={box.height} 
        removeItem={() => this.removeItem(box.id)}/> // this is another solution (with array function). See addItem to see another way to do this.
        )

        return(
            <div className='BoxList'>
                <NewBoxForm createBox={this.addItem}/>
                {boxes}
            </div>
        )
    }


}

export default BoxList;