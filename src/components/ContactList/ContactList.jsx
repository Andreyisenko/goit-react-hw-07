import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContact = contacts.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <>
      <ul className={css.wraperContact}>
        {visibleContact.map(item => (
          <li className={css.item} key={item.id}>
            <Contact contact={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
