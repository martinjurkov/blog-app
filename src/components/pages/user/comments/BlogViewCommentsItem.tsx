import React from 'react';
import { BlogViewCommentsItemTypes } from '../../../../@types/PagesUserTypes';

const BlogViewCommentsItem: React.FC<BlogViewCommentsItemTypes> = ({
  item,
}) => {
  return <div>{item.comments.map((comment: any) => comment.name)}</div>;
};

export default BlogViewCommentsItem;
