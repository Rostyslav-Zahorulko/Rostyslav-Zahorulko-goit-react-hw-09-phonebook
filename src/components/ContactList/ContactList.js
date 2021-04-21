import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem';
import './ContactList.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  const onClick = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  return (
    <ul className="contact-list">
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          onClick={() => onClick(id)}
        />
      ))}
    </ul>
  );
}