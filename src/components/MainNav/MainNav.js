import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MainNav.scss';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const { home, contacts } = routes;

export default function MainNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
        {isLoggedIn && (
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
}
