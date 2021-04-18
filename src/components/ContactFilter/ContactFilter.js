import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactFilter.scss';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

const ContactFilter = ({ filter, onChange }) => (
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

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContactsByName(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
