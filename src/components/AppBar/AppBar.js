import { useSelector } from 'react-redux';
import MainNav from '../MainNav';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import './AppBar.scss';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="app-bar">
      <MainNav />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
