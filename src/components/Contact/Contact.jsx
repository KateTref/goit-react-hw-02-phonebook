import React from 'react';
const Contact = ({ contact }) => {
  console.log(contact);
  return (
    <p>
      {contact.name}: {contact.number}
    </p>
  );
};

export default Contact;
