import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Found from "./found.js"

class App extends Component {
  render() {
    return (
      <Found data={ data }/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
