import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form.js";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  counter() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>Table of My friends</h1>
        <Home />
        <Form />
      </>
    );
  }
}

export default App;
