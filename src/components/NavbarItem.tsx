import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItemTypes } from '../@types/PagesUserTypes';

const NavbarItem: React.FC<NavbarItemTypes> = ({ item, handleArticleView }) => {
  return (
    <div className='navbar__item'>
      <button
        className='btn navbar__item--btn'
        onClick={() => handleArticleView(item)}
      >
        <Link to={`/article/${item.id}`} className='navbar__item--btn-link'>
          {item.title}
        </Link>
      </button>
      <p style={{ fontSize: '1.25rem' }}>{item.perex}</p>
    </div>
  );
};

export default NavbarItem;
