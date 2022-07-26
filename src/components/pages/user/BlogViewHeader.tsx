import React from 'react';
import { BlogViewHeaderTypes } from '../../../@types/PagesUserTypes';

import Cat_1 from '../../../assets/Cat-1.jpg';

const BlogViewHeader: React.FC<BlogViewHeaderTypes> = ({ singleItem }) => {
  return (
    <div className='blog__header'>
      <h1 className='blog__header--title'>{singleItem.title}</h1>
      <div className='blog__header--author-date'>
        <p className='blog__header--author'>{singleItem.author}</p>
        <p>{singleItem.createdAt}</p>
      </div>
      <div className='blog__header--img'>
        <img src={Cat_1} alt='Cat-1' style={{ width: '70rem' }} />
      </div>
    </div>
  );
};

export default BlogViewHeader;
