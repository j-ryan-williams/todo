import React, {Component} from 'react';

class Todos extends Component {
  render() {
    return (
      <div className="Todos-Container">
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return <div className="Todo">
                <div className="Todo-Item">
                  <li key={index}>{todo}</li>
                </div>
                <div className="Todo-Delete">
                  <button className="btn" onClick={(e) => this.props.deleteTodo(index)} type="button">
                    <i id="x-img" className="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Todos;
