import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ContactGenerationForm from '../../components/ContactGenerationForm';
import ContactFilter from '../../components/ContactFilter';
import ContactList from '../../components/ContactList';
import './ContactsPage.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading } = this.props;

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
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
