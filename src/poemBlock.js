import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { stripFirstLineWhitespace } from "./stripWhitespace";
import PoemHighlight from "./poemHighlight";

class PoemBlock extends Component {
  customCreateElement(type, props, children) {
    // console.log(type, props, children);
    switch (type) {
      case 'a':
        // grouping of found phrases
        let newChildren = [];
        let index = parseInt(props.href);
        let reassigns = props.title.split(/\s*\|\s*/);
        let emChildren = children.filter(x => x.type == "em");
        children.forEach(function(child, index) {
          if (child.type == "em") {
            let reassign = reassigns.shift() || child.props.children[0];
            let newChild = (
              <PoemHighlight
                key={ index }
                text={ reassign }
              />
            )
            newChildren.push(newChild);
          } else {
            newChildren.push(child);
          }
        });
        let newType = "span";
        return React.createElement(newType, props, newChildren);
      default:
        return React.createElement(type, props, children);
    }
  }

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
          <Markdown
            children={ text }
            options={{
              createElement: this.customCreateElement
            }}
          />
        </div>
      </div>
    )
  }
}

export default PoemBlock;
