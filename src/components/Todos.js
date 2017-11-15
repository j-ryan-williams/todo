import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return(
          <div className="Todos-Container">
            <ul>
              { this.props.todos.map((todo, index) => {
                return <div className="Todo">
                  <li key={todo}>{ todo }</li>
                  <button className="btn-delete" onClick={() => this.props.deleteTodo(index)} type="button"><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
              }) }
            </ul>
          </div>
        );
    }
}


export default Todos;
