import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { stripFirstLineWhitespace } from "./stripWhitespace";

class PoemBlock extends Component {
  render() {
    let data = this.props.data;

    let textClass = "poem-text";
    if (data.light) {
      textClass += " light";
    } else {
      textClass += " dark";
    }

    let text = stripFirstLineWhitespace(data.text);

    return (
      <div className="poem-block"
        style={{backgroundImage: `url(${ data.background })`}}>
        <div className={ textClass }>
          <Markdown>
            { text }
          </Markdown>
        </div>
      </div>
    )
  }
}

export default PoemBlock;
