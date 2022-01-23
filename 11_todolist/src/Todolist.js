import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css';

class Todolist extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);


    }

    addItem(newItem) {
        this.setState({
            items: [...this.state.items, newItem]
        });

    }
    

    removeItem(id) {
        this.setState({
            items: this.state.items.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.items.map(todo => {
            if(todo.id === id) {
                return {...todo, mission: updatedTask} //prend le todo et l'override
            }
            return todo;
        });

        this.setState({items: updatedTodos});
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.items.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed} //prend le todo et l'override
            }
            return todo;
        });

        this.setState({items: updatedTodos});
    }


  render() {
    const items = this.state.items.map(todo => 
    <li>
        <TodoItem 
            key={todo.id} 
            id={todo.id} 
            mission={todo.mission} 
            completed={todo.completed}
            removeItem={() => this.removeItem(todo.id)}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
        />
    </li>
    )
    return (
    <div className='TodoList'>
        <div className='TodoList-header'>
            <h1>{this.props.title}</h1>
            <p>A simple React Todo List App.</p>
        </div>
        
        {this.state.items.length == 0 && <p>No todo yet.</p>}
        <ul>
            {items} 
        </ul>

        <TodoForm addItem={this.addItem}/>
    </div>
    );
  }
}

export default Todolist;