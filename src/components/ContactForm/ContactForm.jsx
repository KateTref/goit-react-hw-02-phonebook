import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit, contacts }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    let namesArray = [];
    contacts.map(contact => {
      namesArray.push(contact.name);
    });

    const { name, number } = evt.target.elements;

    if (namesArray.includes(name.value)) {
      return alert(name.value + ' is already in contacts');
    } else {
      onSubmit(name.value, number.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.partForm}>
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.partForm}>
        <label htmlFor="number" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="Submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;