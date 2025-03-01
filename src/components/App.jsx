import './App.css';
import { IoCall } from 'react-icons/io5';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <p>goit-react-hw-07</p>
      <IoCall size={30} /> <h1 className="title"> Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
