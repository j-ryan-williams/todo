import React, {Component} from 'react';
import styled from 'styled-components';

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-top: 10px;
  padding-bottom: 10px;
`
const Todo = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 3em;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: white;
  background-color: rgba(255, 255, 255, 0.11);
`
const Item = styled.div`
  padding-left: 10px;
`
const Delete = styled.button`
  padding-right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
`
class Todos extends Component {
  render() {
    return (
      <TodosContainer>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return <Todo>
                <Item>
                  <li key={index}>{todo}</li>
                </Item>
                <div className="Todo-Delete">
                  <Delete className="btn" onClick={(e) => this.props.deleteTodo(index)} type="button">
                    <i id="x-img" className="fa fa-times" aria-hidden="true"></i>
                  </Delete>
                </div>
              </Todo>
            })
          }
        </ul>
      </TodosContainer>
    );
  }
}

export default Todos;
