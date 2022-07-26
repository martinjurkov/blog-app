import React from 'react';
import { BlogDataTypes } from '../../../@types/BlogDataTypes';
import { AdminBlogListTypes } from '../../../@types/PagesAdminTypes';

import AdminBlogItem from './AdminBlogItem';

const AdminBlogList: React.FC<AdminBlogListTypes> = ({
  blogs,
  handleArticleView,
  setViewDeleteModal,
  viewDeleteModal,
  handleDelete,
}) => {
  return (
    <div>
      <div className='admin__list--titles'>
        <h2 className='admin__list--titles-title'>Article title</h2>
        <h2 className='admin__list--titles-perex'>Perex</h2>
        <h2 className='admin__list--titles-author'>Author</h2>
        <h2 className='admin__list--titles-comments'># of comments</h2>
        <h2 className='admin__list--titles-actions'>Actions</h2>
      </div>

      <div>
        {blogs.map((item: BlogDataTypes) => (
          <AdminBlogItem
            key={item.id}
            item={item}
            handleArticleView={handleArticleView}
            setViewDeleteModal={setViewDeleteModal}
            viewDeleteModal={viewDeleteModal}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminBlogList;
