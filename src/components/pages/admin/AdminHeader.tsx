import React from 'react';
import { Link } from 'react-router-dom';

import MyPhoto from '../../../assets/martin-img.jpeg';
import Logout from '../../../assets/logout.png';
import CatLogo from '../../../assets/cat-logo.png';
import { ReactComponent as ArrowDownIcon } from '../../../assets/icon-arrow-down.svg';

const AdminHeader = () => {
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
      <div className='admin__header--right'>
        <button className='btn btn__my-articles'>
          <Link to='/admin/articles' className='btn__my-articles--link'>
            My Articles
          </Link>
        </button>
        <button className='btn btn__create'>
          <Link to='/create/article' className='btn__create--link'>
            Create Article
          </Link>
        </button>
        <button className='btn btn__profile'>
          <span>
            <ArrowDownIcon />
          </span>
          <img
            src={MyPhoto}
            alt='MyPhoto'
            style={{ width: '2rem', borderRadius: '50%', marginLeft: '1rem' }}
          />
        </button>

        <button className='btn btn__logout'>
          <Link to='/' className='btn__logout--link'>
            <img src={Logout} alt='logout' style={{ width: '1.5rem' }} />
          </Link>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
