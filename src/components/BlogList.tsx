import React from 'react';
import { BlogDataTypes } from '../@types/BlogDataTypes';
import { BlogListTypes } from '../@types/ComponentTypes';

import BlogItem from './BlogItem';

const BlogList: React.FC<BlogListTypes> = ({ blog, handleArticleView }) => {
  return (
    <div>
      {blog.map((item: BlogDataTypes) => (
        <BlogItem
          key={item.id}
          item={item}
          handleArticleView={handleArticleView}
        />
      ))}
    </div>
  );
};

export default BlogList;
