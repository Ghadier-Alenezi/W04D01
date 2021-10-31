import React, { Component } from "react";
import "./style.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoItem">
        <li className="todoLi">
          <h3 className="name">{this.props.todo.name}</h3>
          <h3
            className="close"
            onClick={() => this.props.handleDelete(this.props.todo.id)}
          >
            X
          </h3>
          <h3
            className="update"
            onClick={() => this.props.handleUpdate(this.props.todo.id)}
          >
            U
          </h3>
        </li>
      </div>
    );
  }
}
