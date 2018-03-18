import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todobar from './Todobar';
import Todolist from './Todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>To-Do List</h1>
          </div>
          <Todobar />
          <Todolist />           
      </div>
    );
  }
}

export default App;
