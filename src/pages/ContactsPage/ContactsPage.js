import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import ContactGenerationForm from '../../components/ContactGenerationForm';
import ContactFilter from '../../components/ContactFilter';
import ContactList from '../../components/ContactList';
import './ContactsPage.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactsPage() {
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="contacts-page-title">Phonebook</h1>

      <ContactGenerationForm />

      <ContactFilter />

      <ContactList />

      {isLoading && (
        <div className="contacts-page-loader">
          <Loader type="ThreeDots" color="#00BFFF" width={150} height={100} />
        </div>
      )}
    </div>
  );
}
