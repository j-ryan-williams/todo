import React, {Component} from 'react';
import Moment from 'react-moment';
import Todos from './components/Todos';
import Weather from './components/Weather';
import Header from './components/Header';
import Footer from './components/Footer';

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
    this.setState({text: e.target.value});
  }

  addTodo = (e) => {
    e.preventDefault();
    let enterKey = 13;
    if (e.keyCode === enterKey)
      this.setState({
        todos: [
          this.state.text, ...this.state.todos
        ],
        text: ''
      });
    }

  deleteTodo = (index) => {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({todos})
  }

  render() {
    const name = "Ryan";
    return (
      <div className="App">
        <header className="Header-Container">
          <Header />
          <Weather />
        </header>
        <section className="App-Container">
          <div className="Greeting">
            Hello, {name}
          </div>
          <div className="Time">
            <Moment format="h:mm A">{this.props.dateToFormat}</Moment>
          </div>
          <label>
            What is your main focus for today?
          </label>
          <div className="Submit-Container">
            <input value={this.state.text} onChange={(e) => {
              this.handleChange(e)
            }} onKeyUp={this.addTodo} />
          </div>
          <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
