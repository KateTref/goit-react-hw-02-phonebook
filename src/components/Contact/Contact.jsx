import React from 'react';
import PropTypes from 'prop-types';
const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
