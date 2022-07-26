import React from 'react';
import { BlogViewBodyTypes } from '../../../@types/PagesUserTypes';

const BlogViewBody: React.FC<BlogViewBodyTypes> = ({ singleItem }) => {
  return <div className='article__container'>{singleItem.article}</div>;
};

export default BlogViewBody;
