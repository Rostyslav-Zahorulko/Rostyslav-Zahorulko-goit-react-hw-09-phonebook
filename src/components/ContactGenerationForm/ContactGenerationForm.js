import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as AddContactIcon } from '../../icons/add-contact-icon.svg';
import './ContactGenerationForm.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

class ContactGenerationForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    event.preventDefault();

    const existedContactWithTheSameName = contacts.find(
      contact => contact.name === name,
    );

    if (existedContactWithTheSameName !== undefined) {
      alert(`${name} is already in contacts`);
      return;
    }

    onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        className="contact-generation-form"
        autoComplete="off"
        onSubmit={this.handleFormSubmit}
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          ></input>
        </label>

        <IconButton type="submit" aria-label="Add contact">
          <AddContactIcon width="32" height="32" />
        </IconButton>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactGenerationForm);
