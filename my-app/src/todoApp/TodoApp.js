import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './todoApp.css'

class TodoApp extends Component{
    render(){
        return(
            <div className="todo-list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}


export default TodoApp