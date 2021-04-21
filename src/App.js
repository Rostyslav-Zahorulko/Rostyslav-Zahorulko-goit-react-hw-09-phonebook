import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);

const { home, contacts, register, login } = routes;

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path={home}>
            <HomePage />
          </PublicRoute>

          <PublicRoute path={register} restricted redirectTo={contacts}>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path={login} restricted redirectTo={contacts}>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={contacts} redirectTo={login}>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute>
            <HomePage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
