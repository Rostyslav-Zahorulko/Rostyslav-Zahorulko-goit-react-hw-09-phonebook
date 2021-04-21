import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '../IconButton';
import { ReactComponent as AddContactIcon } from '../../icons/add-contact-icon.svg';
import './ContactGenerationForm.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactGenerationForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const existedContactWithTheSameName = contacts.find(
        contact => contact.name === name,
      );

      if (existedContactWithTheSameName !== undefined) {
        alert(`${name} is already in contacts`);
        return;
      }

      const contact = {
        name,
        number,
      };

      dispatch(contactsOperations.addContact(contact));

      setName('');
      setNumber('');
    },
    [contacts, name, number, dispatch],
  );

  return (
    <form
      className="contact-generation-form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <label className="contact-generation-form-field">
        Name
        <input
          className="contact-generation-form-input"
          type="text"
          name="name"
          value={name}
          required
          placeholder="John Smith"
          onChange={handleInputChange}
        ></input>
      </label>

      <label className="contact-generation-form-field">
        Number
        <input
          className="contact-generation-form-input"
          type="tel"
          name="number"
          value={number}
          required
          placeholder="111-11-11"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          onChange={handleInputChange}
        ></input>
      </label>

      <IconButton type="submit" aria-label="Add contact">
        <AddContactIcon width="32" height="32" />
      </IconButton>
    </form>
  );
}
