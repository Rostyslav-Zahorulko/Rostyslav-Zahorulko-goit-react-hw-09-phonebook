import { NavLink } from 'react-router-dom';
import './AuthNav.scss';
import routes from '../../routes';

const { register, login } = routes;

const AuthNav = () => {
  return (
    <nav>
      <ul className="auth-nav-list">
        <li className="auth-nav-list-item">
          <NavLink
            className="auth-nav-list-item-link"
            activeClassName="auth-nav-list-item-active-link"
            to={register}
          >
            Register
          </NavLink>
        </li>
        <li className="auth-nav-list-item">
          <NavLink
            className="auth-nav-list-item-link"
            activeClassName="auth-nav-list-item-active-link"
            to={login}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
