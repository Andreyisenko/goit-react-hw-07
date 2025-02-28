// import { useState } from "react";
import './App.css';
import { IoCall } from 'react-icons/io5';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
function App() {

  return (
    <div>
      <p>goit-react-hw-06</p>
      <IoCall size={30} /> <h1 className="title"> Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList />
    </div>
  );
}

export default App;
