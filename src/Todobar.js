import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from './Actions';

class Todobar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todo: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            ...this.state, [name] : value
        })
        // console.log(this.state);
    }

    addTodo(e){
        e.preventDefault();
        if(this.state.todo){
            this.props.dispatch(AddTodo(this.state.todo))        
        }
        this.setState({
            ...this.state, todo: ""
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
                <button onClick={this.addTodo}>Add To-Do</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(Todobar);