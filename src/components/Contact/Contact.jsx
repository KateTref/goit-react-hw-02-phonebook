import React from 'react';
import PropTypes from 'prop-types';
const Contact = ({ contact }) => {
  console.log(contact);
  return (
    <p>
      {contact.name}: {contact.number}
    </p>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
export default Contact;
