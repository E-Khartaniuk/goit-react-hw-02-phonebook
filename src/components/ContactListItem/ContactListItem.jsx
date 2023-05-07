import React, { Component } from 'react';

export default class ContactListItem extends Component {
  render() {
    const { name, number } = this.props.contact;

    return (
      <li className="listItem">
        {name}: {number}
      </li>
    );
  }
}
