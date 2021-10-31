import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todo />
        <Footer />
      </div>
    );
  }
}
