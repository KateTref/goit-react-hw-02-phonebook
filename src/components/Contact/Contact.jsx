import React from 'react';
import PropTypes from 'prop-types';
const Contact = ({ contact }) => {
  return (
    <p>
      {contact.name}: {contact.number}
    </p>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
export default Contact;
