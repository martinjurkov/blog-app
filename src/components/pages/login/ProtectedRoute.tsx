import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteTypes } from '../../../@types/PagesLoginTypes';

const ProtectedRoute: React.FC<ProtectedRouteTypes> = ({
  adminLogin,
  children,
}) => {
  if (adminLogin) {
    return <Navigate to='/admin/articles' replace />;
  }
  return children;
};

export default ProtectedRoute;
