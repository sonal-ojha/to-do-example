import React from 'react';
import { connect } from "react-redux";
import { DeleteTodo } from './Actions';

class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            action: "Delete"
        };
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(i){
        this.props.dispatch(DeleteTodo(i));
    }

    render() {

        const list = this.props.TodoReducer.todo.map((e,i)=>{
            return (
                <li key={i}>{e} <button onClick={ (e) => { e.preventDefault(); this.deleteTodo(i) } }>{this.state.action}</button></li>
            )
        });

        return (
            <div>
                <ul>  
                    {list}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Todolist);