import React from 'react';
import { BlogDataTypes } from '../@types/BlogDataTypes';
import { NavbarListTypes } from '../@types/PagesUserTypes';

import NavbarItem from './NavbarItem';

const NavbarList: React.FC<NavbarListTypes> = ({
  related,
  handleArticleView,
}) => {
  return (
    <nav className='nav'>
      <h2 style={{ fontSize: '2.75rem', fontWeight: '400' }}>
        Related Articles
      </h2>
      <div>
        {related.map((item: BlogDataTypes) => (
          <NavbarItem
            key={item.id}
            item={item}
            handleArticleView={handleArticleView}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavbarList;
