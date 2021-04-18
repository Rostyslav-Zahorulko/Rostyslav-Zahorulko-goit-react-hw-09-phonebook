import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainNav from '../MainNav';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import './AppBar.scss';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header className="app-bar">
    <MainNav />

    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
