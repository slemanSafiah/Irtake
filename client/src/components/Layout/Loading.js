import React, { Component } from "react";
import { DotScale } from "styled-loaders-react";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <DotScale color="#b6666f" size="100px" duration="5s" />
      </div>
    );
  }
}
