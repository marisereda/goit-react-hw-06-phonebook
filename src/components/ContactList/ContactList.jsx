import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact';
import { List } from './ContactList.styled';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  // --------------------------------
  const getFilteredContacts = () => {
    return filterValue
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };

  // --------------------------------
  return (
    <List>
      {getFilteredContacts().map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
