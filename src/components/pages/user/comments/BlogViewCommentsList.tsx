import React from 'react';
import { BlogViewCommentsListTypes } from '../../../../@types/PagesUserTypes';

const BlogViewCommentsList: React.FC<BlogViewCommentsListTypes> = ({
  singleItem,
}) => {
  return (
    <div className='blog__comments'>
      <h3 className='blog__comments--name'>
        {singleItem.comments.map((comment: any) => comment.name)}
      </h3>
      <p className='blog__comments--text'>
        {singleItem.comments.map((comment: any) => comment.comment)}
      </p>
    </div>
  );
};

export default BlogViewCommentsList;
