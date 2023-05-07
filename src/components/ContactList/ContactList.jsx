import ContactListItem from 'components/ContactListItem/ContactListItem';
import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props.state;
    return (
      <div className="contactList">
        <ul>
          {contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter);
            })
            .map(contact => {
              return (
                <ContactListItem
                  contact={contact}
                  key={contact.id}
                ></ContactListItem>
              );
            })}
        </ul>
      </div>
    );
  }
}
