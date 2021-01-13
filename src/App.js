import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = { id: uuidv4(), name: this.state.name, number: this.state.number };
    console.log(user);
    this.setState({ contacts: [...this.state.contacts, user] });
  };
  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={name} onChange={this.handleInputChange} />
          </label>
          <label>
            Number
            <input type="text" name="number" value={number} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input type="text" name="filter" value={filter} onChange={this.handleInputChange} />
        <ul>
          {this.state.contacts
            .filter(item => item.name.includes(this.state.filter))
            .map(item => (
              <li key={item.id}>
                <span>{item.name}: </span>
                <span>{item.number}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
