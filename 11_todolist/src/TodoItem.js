import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            mission: this.props.mission
        }

        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

    
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        //take a new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.mission);
        this.setState({isEditing : false});
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)
    }

  render() {

    const isEditingIsTrue = (
        <div>
            <form onSubmit={this.handleUpdate} >
                <input className='TodoItem-mission' type="text" name="mission" value={this.state.mission}  onChange={this.handleChange}/>
                <button>Save</button>
            </form>
        </div>
    );

    const isEditingIsFalse = (
    <div className='TodoItem'>

        <li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle} >{this.props.mission}</li>
        <div>
            <a onClick={this.toggleForm}><i class="fas fa-pen"></i></a>
            <a onClick={this.props.removeItem}><i class="fas fa-trash"></i></a>
        </div>
    </div>
    )

    return(
    <div className='TodoItem'>
        {this.state.isEditing ?  isEditingIsTrue : isEditingIsFalse }
    </div>
    );
  }
}

export default TodoItem;