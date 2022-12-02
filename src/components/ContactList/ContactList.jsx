import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <Contact contact={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
