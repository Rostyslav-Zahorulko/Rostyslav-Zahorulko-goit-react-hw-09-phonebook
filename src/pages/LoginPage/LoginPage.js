import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './LoginPage.scss';
import { authOperations } from '../../redux/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const user = {
        email,
        password,
      };

      dispatch(authOperations.logIn(user));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );

  return (
    <div>
      <b className="login-page-call">Please, log in</b>

      <form
        className="login-form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </label>

        <button className="login-form-button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
