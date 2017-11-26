import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import {
  TodosContainer, Todo, Item, Delete
} from './styled/TodosStyled';

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
                    <FontAwesome name="times" size='2x' style={{ color: '#EEEEEE'}}/>
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
