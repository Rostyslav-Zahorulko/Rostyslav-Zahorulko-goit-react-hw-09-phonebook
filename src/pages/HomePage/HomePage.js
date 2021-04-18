import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HomePage.scss';
import PhoneIcon from '../../icons/phone-icon.png';

const HomePage = ({ icon }) => {
  return (
    <div>
      <h1 className="homepage-title">PHONEBOOK APP</h1>
      <img className="homepage-image" src={icon} alt="Phone icon" />
    </div>
  );
};

HomePage.propTypes = {
  icon: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  icon: PhoneIcon,
});

export default connect(mapStateToProps)(HomePage);
