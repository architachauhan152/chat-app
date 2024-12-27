import React, { useState } from 'react';
import Contacts from './Contacts';
import Chat from './Chat';
import './App.css';

const App = () => {
  const [contacts] = useState([
    { name: 'Archana' },
    { name: 'Ritu' },
    { name: 'Nikki' }
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="app-container">
      <Contacts contacts={contacts} selectContact={setSelectedContact} />
      {selectedContact && <Chat contact={selectedContact} />}
    </div>
  );
};

export default App;
