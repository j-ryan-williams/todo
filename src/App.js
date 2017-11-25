import React, {Component} from 'react';
import Moment from 'react-moment';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';

import {
  AppContainer, Main, Left, Middle,
  Right, Time, Label, Input
} from './styled/AppStyled';

import 'moment-timezone';


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
    return (
      <AppContainer>
        <Header />
        <Main>
          <Left>
            <Footer />
          </Left>
          <Middle>
            <Greeting />
            <Time>
              <Moment format="h:mm A">
                {this.props.dateToFormat}
              </Moment>
            </Time>
            <Label>
              What do you need to get done today?
            </Label>
            <Input value={this.state.text}
              onChange={(e) => {this.handleChange(e)}}
              onKeyUp={this.addTodo}
            />
            <Todos deleteTodo={this.deleteTodo}
              todos={this.state.todos}
            />
          </Middle>
          <Right>
            <h1>Hello</h1>
          </Right>
        </Main>
      </AppContainer>
    );
  }
}

export default App;
