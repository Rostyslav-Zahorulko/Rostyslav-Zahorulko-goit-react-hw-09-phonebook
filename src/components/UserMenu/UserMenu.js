import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultUserAvatar from '../../icons/default-user-avatar.svg';
import './UserMenu.scss';
import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className="user-menu">
      <div className="user-menu-info">
        <img
          className="user-menu-avatar"
          src={defaultUserAvatar}
          alt="User avatar"
          width="32"
          height="32"
        />
        <span className="user-menu-email">{email}</span>
      </div>
      <button className="user-menu-button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
