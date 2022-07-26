import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogDataTypes } from './@types/BlogDataTypes';

import BlogData from './data/BlogData';
import Header from './components/Header';
import BodyHeader from './components/BodyHeader';
import BlogList from './components/BlogList';
import BlogView from './components/pages/user/BlogView';
import Login from './components/pages/login/Login';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import CreateArticle from './components/pages/admin/create/CreateArticle';
import EditArticle from './components/pages/admin/edit/EditArticle';

const App: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogDataTypes[]>(BlogData);

  const [viewSingleArticle, setViewSingleArticle] = useState<
    BlogDataTypes | {}
  >({});

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [adminLogin, setAdminLogin] = useState<boolean>(false);

  const [viewDeleteModal, setViewDeleteModal] = useState<boolean>(false);

  const admin = {
    email: 'martin@applifting.cz',
    password: 'applifting123',
  };

  const viewArticle = (viewBlogArticle: BlogDataTypes | {}) => {
    setViewSingleArticle(viewBlogArticle);
    window.scrollTo(0, 0);
  };

  const logToAdmin = (e: any) => {
    e.preventDefault();

    if (email === admin.email && password === admin.password) {
      setAdminLogin(true);
    } else {
      alert('Email or password is incorrect!');
    }

    setEmail('');
    setPassword('');
  };

  const addBlog = (newBlog: BlogDataTypes) => {
    // newBlog.id = (Math.random() * 1000000).toString();
    setBlogData([newBlog, ...blogData]);
  };

  const deleteBlog = (id: string) => {
    setBlogData(blogData.filter((blog: BlogDataTypes) => blog.id !== id));
  };

  const editBlog = (newBlog: BlogDataTypes) => {
    const newBlogs = blogData.map((blog: BlogDataTypes) => {
      if (newBlog.id === blog.id) {
        return newBlog;
      }
      return blog;
    });

    setBlogData(newBlogs);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main>
                <BodyHeader />
                <BlogList blog={blogData} handleArticleView={viewArticle} />
              </main>
            </>
          }
        />

        <Route
          path='/article/:id'
          element={
            <>
              <div className='article__container'>
                <BlogView
                  singleItem={viewSingleArticle}
                  related={blogData}
                  handleArticleView={viewArticle}
                />
              </div>
            </>
          }
        />

        <Route
          path='/articles/login'
          element={
            <Login
              handleAdminLogin={logToAdmin}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />

        <Route
          path='/admin/articles'
          element={
            <>
              <AdminDashboard
                blogs={blogData}
                handleArticleView={viewArticle}
                handleDelete={deleteBlog}
                setViewDeleteModal={setViewDeleteModal}
                viewDeleteModal={viewDeleteModal}
              />
            </>
          }
        />

        <Route
          path='/create/article'
          element={
            <>
              <CreateArticle handleAdd={addBlog} />
            </>
          }
        />

        <Route
          path='/edit/article/:id'
          element={
            <>
              <EditArticle handleEdit={editBlog} blogData={viewSingleArticle} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
