import React, { Component } from "react";
import PoemBlock from "./poemBlock";

class Found extends Component {
  render() {
    let original = this.props.data.originalSource;
    let sources = this.props.data.sources;
    return (
      <div className="found-poem">
        <PoemBlock data={original}/>
      </div>
    )
  }
}

export default Found;
