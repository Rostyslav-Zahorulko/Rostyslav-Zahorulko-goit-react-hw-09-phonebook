import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ContactFilter.scss';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

export default function ContactFilter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    event => {
      dispatch(contactsActions.filterContactsByName(event.target.value));
    },
    [dispatch],
  );

  return (
    <label className="contacts-filter">
      Find contacts by name
      <input
        className="contacts-filter-input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
}
