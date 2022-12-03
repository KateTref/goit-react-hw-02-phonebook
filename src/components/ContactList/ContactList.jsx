import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <Contact contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
