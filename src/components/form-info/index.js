import React from "react";
import kos from "kos-core";
import model from "./model";

@kos.Wrapper({ model })
export default class BaseForm extends React.Component {
  render() {
    console.log(this.props);
    return <div>{this.props.children}</div>;
  }
}
