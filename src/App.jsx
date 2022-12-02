import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name }],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && (
          <>
            <h1>Contacts</h1>
            <ContactList items={contacts} />
          </>
        )}
      </>
    );
  }
}

export default App;
