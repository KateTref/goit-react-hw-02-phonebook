import React from 'react';

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name } = evt.target.elements;
    onSubmit(name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="Submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
