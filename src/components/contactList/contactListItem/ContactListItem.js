import React from 'react';
const ContactListItem = ({ item }) => {
  return (
    <li key={item.id}>
      <span>{item.name}: </span>
      <span>{item.number}</span>
    </li>
  );
};

export default ContactListItem;
