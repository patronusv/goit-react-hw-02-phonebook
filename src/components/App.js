import React, { Component } from 'react';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addPhonebookItem = item => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, item],
      };
    });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddItem={this.addPhonebookItem} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleInputChange} filter={filter} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    );
  }
}
