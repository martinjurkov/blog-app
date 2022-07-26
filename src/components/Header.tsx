import React from 'react';
import { Link } from 'react-router-dom';

import CatLogo from '../assets/cat-logo.png';
import { ReactComponent as ArrowRightIcon } from '../assets/icon-arrow-right.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className='header__left'>
        <div className='cat__logo'>
          <img src={CatLogo} alt='cat-logo' style={{ width: '4rem' }} />
        </div>
        <button className='btn btn__recent'>
          <Link to='/' className='btn__recent--link'>
            Recent Articles
          </Link>
        </button>
        <button className='btn btn__about'>About</button>
      </div>
      <div className='header__right'>
        <button className='btn header__right--btn'>
          <Link to='/articles/login' className='header__right--btn-link'>
            Login{' '}
            <span>
              <ArrowRightIcon />
            </span>
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
