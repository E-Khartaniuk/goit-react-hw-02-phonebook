import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <input
        className="filterInput"
        name="filter"
        onChange={this.props.handlerChenge}
      ></input>
    );
  }
}
