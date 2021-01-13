import React from 'react';
import ContactListItem from './contactListItem/ContactListItem';
const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => (
          <ContactListItem item={item} key={item.id} />
        ))}
    </ul>
  );
};

export default ContactList;
