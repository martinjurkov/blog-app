import React from 'react';
import { BlogViewTypes } from '../../../@types/PagesUserTypes';

import Header from '../../Header';
import NavbarList from '../../NavbarList';
import BlogViewHeader from './BlogViewHeader';
import BlogViewBody from './BlogViewBody';
import BlogViewComments from './comments/BlogViewComments';

const BlogView: React.FC<BlogViewTypes> = ({
  singleItem,
  related,
  handleArticleView,
}) => {
  return (
    <div>
      <Header />
      <BlogViewHeader singleItem={singleItem} />
      <BlogViewBody singleItem={singleItem} />
      <BlogViewComments
        related={related}
        handleArticleView={handleArticleView}
        singleItem={singleItem}
      />
      <NavbarList related={related} handleArticleView={handleArticleView} />
    </div>
  );
};

export default BlogView;
