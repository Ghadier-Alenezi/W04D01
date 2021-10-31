import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "code" },
        { id: 2, name: "sleep" },
      ],
    };
  }

  // creat new li
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(evet.target.task.value);
    // console.log(this.state.todos);
    const todo = {
      id: this.state.todos.length + 1,
      name: e.target.task.value,
    };
    this.setState({
      todos: [...this.state.todos, todo],
      // ... copy main array
    });
    e.target.task.value = "";
    // empty the input after submit
  };

  // delete li
  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id != id) });
    // filter main array > not include deleted id
  };

  // update li
  // handleUpdate = (id) => {
  //   this.setState({
  //     todos: this.state.todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {...todo, name: 'new updated name'}
  //       }
  //     }),
  //   });
  // };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" />
          <button> Add Task</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <TodoItem todo={todo} key={i} handleDelete={this.handleDelete} />
          ))}
        </ul>
      </div>
    );
  }
}
