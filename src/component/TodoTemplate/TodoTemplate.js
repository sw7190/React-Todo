import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import './TodoTemplate.css';

class TodoTemplate extends Component {

    render() {
        return(
            <div id="TodoTemplate">
                <header><h1>ToDo List!</h1></header>
                <TodoForm/>
                <ul>
                    <TodoItem/>
                </ul>
            </div>
        )
    }
}

export default TodoTemplate;