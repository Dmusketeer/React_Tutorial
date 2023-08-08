import "./App.css";

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
        <h1> Count:{this.state.count}</h1>
        <button type="button" onClick={() => this.counter()}>
          Add
        </button>
      </>
    );
  }
}

export default App;
