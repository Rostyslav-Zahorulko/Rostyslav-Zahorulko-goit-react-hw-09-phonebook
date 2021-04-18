import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

class App extends Component {
  static propTypes = {
    onGetCurrentUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path={home} component={HomePage} />
            <PublicRoute
              path={register}
              restricted
              component={RegisterPage}
              redirectTo={contacts}
            />
            <PublicRoute
              path={login}
              restricted
              component={LoginPage}
              redirectTo={contacts}
            />
            <PrivateRoute
              path={contacts}
              component={ContactsPage}
              redirectTo={login}
            />
            <PublicRoute component={HomePage} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
// });

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
