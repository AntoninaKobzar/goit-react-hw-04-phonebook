import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import css from './App.module.css';

const init=[
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(()=>
    JSON.parse(localStorage.getItem('contacts')) ?? init
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = data => {
    console.log(data,'data')
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === data.number)) {
      return alert(`${data.number} this number is already in your phonebook`);
    } else {
      setContacts(p => [data, ...p]);
    }
  };

  const onDeleteContact = idContact => {
    setContacts(p => p.filter(contact => contact.id !== idContact));
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  


    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter}/>
        <ContactList
          contacts={getFilteredContact()}
          onDeleteContact={onDeleteContact} />
      </div>
    );
  }


export default App;
