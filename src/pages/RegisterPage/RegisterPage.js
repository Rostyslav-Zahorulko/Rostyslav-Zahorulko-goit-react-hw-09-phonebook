import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RegisterPage.scss';
import { authOperations } from '../../redux/auth';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <b className="signup-page-call">Please, sign up</b>

        <form
          className="signup-form"
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <label className="signup-form-field">
            Name
            <input
              className="signup-form-input"
              type="text"
              name="name"
              value={name}
              required
              placeholder="Peter Parker"
              onChange={this.handleInputChange}
            />
          </label>

          <label className="signup-form-field">
            Email
            <input
              className="signup-form-input"
              type="email"
              name="email"
              value={email}
              required
              placeholder="peter.parker@gmail.com"
              onChange={this.handleInputChange}
            />
          </label>

          <label className="signup-form-field">
            Password
            <input
              className="signup-form-input"
              type="password"
              name="password"
              value={password}
              required
              pattern=".{7,}"
              title="Must contain at least 7 or more characters"
              onChange={this.handleInputChange}
            />
          </label>

          <button className="signup-form-button" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperations.register(data)),
// });

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
