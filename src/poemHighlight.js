import React, { Component } from "react";

class PoemHighlight extends Component {
  render() {
    console.log(this.props.text);
    return (
      <span className="poem-highlight">
        { this.props.text }
      </span>
    )
  }
}

export default PoemHighlight;
