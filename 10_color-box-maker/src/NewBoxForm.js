import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            bgc: '',
            width: 0,
            height: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuidv4()}
        this.props.createBox(newBox)
        this.setState({
            bgc : '',
            width: '',
            height: '',
        })
       
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='bgc'>Background color: </label>
                    <input onChange={this.handleChange} id='bgc' value={this.state.bgc} type="text" name="bgc"></input>
                </div> 
                <div>
                    <label htmlFor='width'>Width: </label>
                    <input onChange={this.handleChange} id='width' value={this.state.width}  type="number" name="width"></input>
                </div>
                <div>
                    <label htmlFor='height'>height: </label>
                    <input onChange={this.handleChange} id='height' value={this.state.height}  type="number"name="height"></input>
                </div>

                <button>Submit</button>
            </form>
        )
    }
}

export default NewBoxForm;