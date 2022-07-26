import React from 'react';
import { AdminDashboardTypes } from '../../../@types/PagesAdminTypes';

import AdminBlogList from './AdminBlogList';
import AdminBodyHeader from './AdminBodyHeader';
import AdminHeader from './AdminHeader';

const AdminDashboard: React.FC<AdminDashboardTypes> = ({
  blogs,
  handleArticleView,
  handleDelete,
  setViewDeleteModal,
  viewDeleteModal,
}) => {
  return (
    <>
      <AdminHeader />
      <div className='admin__container'>
        <AdminBodyHeader />
        <AdminBlogList
          blogs={blogs}
          handleArticleView={handleArticleView}
          setViewDeleteModal={setViewDeleteModal}
          viewDeleteModal={viewDeleteModal}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default AdminDashboard;
