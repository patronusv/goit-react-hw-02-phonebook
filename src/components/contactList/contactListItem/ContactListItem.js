import React from 'react';
const ContactListItem = ({ item, onBtnClick }) => {
  return (
    <li key={item.id}>
      <span>{item.name}: </span>
      <span>{item.number}</span>
      <button type="button" onClick={onBtnClick} data-id={item.id}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactListItem;
