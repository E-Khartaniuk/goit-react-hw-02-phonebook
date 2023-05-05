import React, { Component } from 'react';
import { Phonebook } from './phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook /> React homework template aaaaaaaaaaaaaaaaaa
      </div>
    );
  }
}
