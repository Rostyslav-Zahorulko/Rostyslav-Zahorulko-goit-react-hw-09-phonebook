import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

const filterContactsByName = createAction('contacts/filter');

const contactsActions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContactsByName,
};

export default contactsActions;
