import React, { Component } from 'react';
import Moment from 'react-moment';
import Todos from './components/Todos';
import Weather from './components/Weather';

import 'moment-timezone';
import './styles/App.css';


class App extends Component {
  constructor() {
      super();
      this.state = {
        todos: [],
        text: ''
      };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addTodo = (e) => {
    e.preventDefault();
    if( e.target.value === '') {
    }
    this.setState({ todos: [ this.state.text, ...this.state.todos ], text: '' });
  }

  deleteTodo = (index) => {
    const todos = this.state.todos.filter((todo, todoIndex) => {
       return todoIndex !== index
     })
     this.setState({ todos })
   }

  render() {
    return (
      <div className="App">
        <div className="App-Container">
          <p className="Title">FOCAL</p>

          <hr />

          <div className="Time">
            <Moment format=" h:mm A">
              {this.props.dateToFormat}
            </Moment>
          </div>
          <label>What is your main focus for today?</label>
          <div className="Submit-Container">
            <input
              value={this.state.text}
              onChange={(e) => {this.handleChange(e)}}
            />
            <button onClick = {(e) => this.addTodo(e)} type="submit">
              <img alt="" src="https://png.icons8.com/plus/android/12/000000"></img>
            </button>
          </div>
          <Todos deleteTodo={ this.deleteTodo } todos={ this.state.todos } />
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
