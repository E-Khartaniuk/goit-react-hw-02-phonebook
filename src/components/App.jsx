import React, { Component } from 'react';

import { PhoneBookForm } from './phonebook/PhoneBookForm';
// import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './styleMain/styleMaine.module.css';

const MyContext = React.createContext();

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addToContact = contactsData => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactsData],
      };
    });
  };

  deleteContact = updatedContacts => {
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div className={css.conteiner}>
        <h3 className={css.title}>Phone book</h3>
        <PhoneBookForm
          state={this.state}
          handlerChenge={this.handlerChenge}
          handlerSubmit={this.handlerSubmit}
          addToContact={this.addToContact}
        />
        <h4 className={css.titleSecond}>Find Contact</h4>
        <Filter handlerChenge={this.handlerChenge} />
        <h4 className={css.titleSecond}>Contacts</h4>
        <ContactList
          state={this.state}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
// }
