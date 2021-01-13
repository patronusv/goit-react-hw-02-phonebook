import React from 'react';
const Filter = ({ onChange, filter }) => {
  return <input type="text" name="filter" value={filter} onChange={onChange} />;
};

export default Filter;

// import React, { Component } from 'react';
// export default class Filter extends Component {
//   state = { filter: '' };
//   render() {
//     return <input type="text" name="filter" value={this.props.filter} onChange={this.props.onChange} />;
//   }
// }
