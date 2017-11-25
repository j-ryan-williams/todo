import React, {Component} from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';

import 'moment-timezone';
import './styles/App.css';

const AppContainer = styled.div`
font-family: 'Work Sans';
display: flex;
width: 100%;
height: 100vh;
color: white;
background: #360033;
background: -webkit-linear-gradient(to right, #0b8793, #360033);
background: linear-gradient(to right, #0b8793, #360033);
align-items: center;
flex-direction: column;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`
const Time = styled.div`
font-family: Roboto;
font-weight: 700;
font-size: 70px;
letter-spacing: 5px;
padding-bottom: 20px;
`
const Label = styled.label`
  font-family: Roboto;
  font-weight: 100;
  font-size: 18px;
  padding-bottom: 10px;
  letter-spacing: 2px;
`
const Input = styled.input`
  margin-top: 10px;
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 1.5em;
  width: 400px;
  height: 1.5em;
  padding: 0 8px;
  color: white;
  border: none;
  border-bottom: .3px solid white;
  outline: none;
  background-color: transparent;
`

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
            onChange={(e) => {this.handleChange(e)}} onKeyUp={this.addTodo}
          />
          <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        </Main>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
