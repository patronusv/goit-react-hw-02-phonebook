import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class ContactForm extends Component {
  state = {
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

    this.props.onAddItem(user);
  };
  render() {
    const { name, number } = this.state;
    return (
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
    );
  }
}
