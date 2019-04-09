import React, { Component } from "react";
import PoemBlock from "./poemBlock";

class Found extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poemCurrentlyVisible: 0
    };
    this.advancePoem = this.advancePoem.bind(this);
  }

  advancePoem() {
    this.setState(function(state, props) {
      let numSources = props.data.sources.length;
      let newPoemVisible = (state.poemCurrentlyVisible + 1) % numSources;
      return {
        poemCurrentlyVisible: newPoemVisible
      }
    });
  }

  render() {
    let original = this.props.data.originalSource;
    let sources = this.props.data.sources;
    return (
      <div onClick={ this.advancePoem }
        className="found-wrapper">
        <div className="found-poem">
          <div className="derivative-poems">
            {
              sources.map((data, index) =>
                (
                  <PoemBlock data={data} key={index}
                    visible={ index == this.state.poemCurrentlyVisible }/>
                )
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Found;
