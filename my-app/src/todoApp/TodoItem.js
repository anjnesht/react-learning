import React,{Component} from 'react'

class TodoItem extends Component{
    render(){
        return(
            <div  className="todo-item">
                <input type="checkbox"/>
                <p>PlaceHolder1</p>
            </div>
        )
    }
}

export default TodoItem