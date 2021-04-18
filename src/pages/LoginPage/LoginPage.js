import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './LoginPage.scss';
import { authOperations } from '../../redux/auth';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <b className="login-page-call">Please, log in</b>

        <form
          className="login-form"
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <label className="login-form-field">
            Email
            <input
              className="login-form-input"
              type="email"
              name="email"
              value={email}
              required
              placeholder="peter.parker@gmail.com"
              onChange={this.handleInputChange}
            />
          </label>

          <label className="login-form-field">
            Password
            <input
              className="login-form-input"
              type="password"
              name="password"
              value={password}
              required
              onChange={this.handleInputChange}
            />
          </label>

          <button className="login-form-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperations.logIn(data)),
// });

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
