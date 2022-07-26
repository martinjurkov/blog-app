import React, { useState } from 'react';
import { EditArticleTypes } from '../../../../@types/EditArticleTypes';

import AdminHeader from '../AdminHeader';
import EditArticleContent from './EditArticleContent';
import EditArticleHeader from './EditArticleHeader';
import EditArticleTitle from './EditArticleTitle';

const CreateArticle: React.FC<EditArticleTypes> = ({
  handleEdit,
  blogData,
}) => {
  const [articleTitle, setArticleTitle] = useState<string>(blogData.title);
  //   const [articleImage, setArticleImage] = useState<any>('');
  const [articleContent, setArticleContent] = useState<string>(
    blogData.article
  );
  const [articlePerex, setArticlePerex] = useState<string>(blogData.perex);

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const handleEditBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editBlog = {
      id: blogData.id,
      createdAt: `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
      }`,
      title: articleTitle,
      author: 'Martin Jurkov',
      perex: articlePerex,
      article: articleContent,
    };

    handleEdit(editBlog);

    setArticleTitle('');
    setArticleContent('');
    setArticlePerex('');
  };

  return (
    <>
      <AdminHeader />

      <form onSubmit={handleEditBlog}>
        <div className='create__article'>
          <EditArticleHeader />

          <EditArticleTitle
            articleTitle={articleTitle}
            setArticleTitle={setArticleTitle}
          />

          <EditArticleContent
            articleContent={articleContent}
            setArticleContent={setArticleContent}
            articlePerex={articlePerex}
            setArticlePerex={setArticlePerex}
          />
        </div>
      </form>
    </>
  );
};

export default CreateArticle;
