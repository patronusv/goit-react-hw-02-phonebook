import React from 'react';
import ContactListItem from './contactListItem/ContactListItem';
const ContactList = ({ contacts, filter, onBtnClick }) => {
  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => (
          <ContactListItem item={item} key={item.id} onBtnClick={onBtnClick} />
        ))}
    </ul>
  );
};

export default ContactList;
