import React, { Component } from 'react';

export default class ContactListItem extends Component {
  findIdToDeleteContact = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { name, number } = this.props.contact;
    return (
      <li className="listItem">
        {name}: {number}{' '}
        <button onClick={this.findIdToDeleteContact}>Delete contact</button>
      </li>
    );
  }
}
