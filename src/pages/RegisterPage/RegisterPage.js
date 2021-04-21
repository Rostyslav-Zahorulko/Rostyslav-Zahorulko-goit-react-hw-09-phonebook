import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './RegisterPage.scss';
import { authOperations } from '../../redux/auth';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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
        name,
        email,
        password,
      };

      dispatch(authOperations.register(user));

      setName('');
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );

  return (
    <div>
      <b className="signup-page-call">Please, sign up</b>

      <form
        className="signup-form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </label>

        <button className="signup-form-button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
