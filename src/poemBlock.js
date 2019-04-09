import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { stripFirstLineWhitespace } from "./stripWhitespace";

class PoemBlock extends Component {
  render() {
    let data = this.props.data;

    let text = stripFirstLineWhitespace(data.text);

    let classes = ["poem-block"];
    if (this.props.visible) {
      classes.push("visible");
    }
    let className = classes.join(" ");

    return (
      <div className={ className }
        style={{backgroundImage: `url(${ data.background })`}}>
        <div className="poem-text">
          <Markdown>
            { text }
          </Markdown>
        </div>
      </div>
    )
  }
}

export default PoemBlock;
