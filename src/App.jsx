import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList items={visibleContacts} />
          </>
        )}
      </>
    );
  }
}

export default App;
