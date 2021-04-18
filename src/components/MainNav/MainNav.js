import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainNav.scss';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const { home, contacts } = routes;

const MainNav = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul className="main-nav-list">
        <li className="main-nav-list-item">
          <NavLink
            className="main-nav-list-item-link"
            activeClassName="main-nav-list-item-active-link"
            exact
            to={home}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="main-nav-list-item">
            <NavLink
              className="main-nav-list-item-link"
              activeClassName="main-nav-list-item-active-link"
              to={contacts}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(MainNav);
