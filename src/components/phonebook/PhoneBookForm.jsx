import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handlerSubmit = event => {
    event.preventDefault();

    const unicCintactSearch = this.props.state.contacts.some(
      contact => contact.name === this.state.name
    );

    if (unicCintactSearch) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    const contactsData = {
      id: nanoid(8),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addToContact(contactsData);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handlerSubmit}>
          {' '}
          <label htmlFor="">
            {' '}
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handlerChenge}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handlerChenge}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
