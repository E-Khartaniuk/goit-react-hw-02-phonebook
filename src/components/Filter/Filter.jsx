import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <input
        className={css.filterInput}
        name="filter"
        onChange={this.props.handlerChenge}
      ></input>
    );
  }
}
