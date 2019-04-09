import React, { Component } from "react";
import PoemBlock from "./poemBlock";

class Found extends Component {
  render() {
    let original = this.props.data.originalSource;
    let sources = this.props.data.sources;
    return (
      <div className="found-poem">
        <PoemBlock data={original}/>
        <div className="derivative-poems">
          {
            sources.map((data, index) =>
              (
                <PoemBlock data={data} key={index}/>
              )
            )
          }
        </div>
      </div>
    )
  }
}

export default Found;
