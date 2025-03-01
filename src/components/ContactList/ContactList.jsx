import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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
