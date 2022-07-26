import React from 'react';
import { Link } from 'react-router-dom';
import { LoginTypes } from '../../../@types/PagesLoginTypes';

const Login: React.FC<LoginTypes> = ({
  handleAdminLogin,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form className='login__form' onSubmit={handleAdminLogin}>
      <h2>Log In</h2>
      <div className='login__email'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          placeholder='me@example.com'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div className='login__password'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='*******'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <button className='btn login__btn' type='submit'>
        <Link to='/admin/articles' className='login__btn--link'>
          Log In
        </Link>
      </button>
    </form>
  );
};

export default Login;
