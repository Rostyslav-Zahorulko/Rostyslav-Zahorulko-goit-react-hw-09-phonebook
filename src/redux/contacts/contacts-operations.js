import axios from 'axios';
import { contactsActions } from '../contacts';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactsActions;

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(({ message }) => dispatch(fetchContactsError(message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(({ message }) => dispatch(addContactError(message)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(({ message }) => dispatch(deleteContactError(message)));
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
