import React, { Component } from 'react';
import './TodoForm.css';
import { v4 as uuidv4 } from 'uuid';

 class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mission: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleAddItem(evt) {
        evt.preventDefault();
        this.props.addItem({...this.state,id: uuidv4(), completed: false});
        this.setState({mission: ""})
    }

  render() {
    return(
        <form className='TodoForm' onChange={this.handleChange}>
            
            <div className='TodoForm-container'>
                <label htmlFor='mission'>New todo</label>
                <input id='mission' name="mission" type="text" value={this.state.mission}></input>
                <button onClick={this.handleAddItem}>save</button>
            </div>
        </form>
    )
  }
}

export default TodoForm;