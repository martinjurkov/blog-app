import React from 'react';

import BlogViewCommentsList from './BlogViewCommentsList';
import { BlogViewCommentsTypes } from '../../../../@types/PagesUserTypes';

const BlogViewComments: React.FC<BlogViewCommentsTypes> = ({
  related,
  handleArticleView,
  singleItem,
}) => {
  return (
    <div className='blog__comments'>
      <h2 className='blog__comments--header'>Comments</h2>

      {/* <BlogViewCommentsForm /> */}

      <BlogViewCommentsList
        related={related}
        handleArticleView={handleArticleView}
        singleItem={singleItem}
      />
    </div>
  );
};

export default BlogViewComments;
