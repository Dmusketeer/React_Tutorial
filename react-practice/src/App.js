import "./App.css";
import SignUpFrom from "./components/SignUpFrom";
// import Form from "./components/Form.js";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <SignUpFrom />
      </>
    );
  }
}

export default App;
