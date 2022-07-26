import React, { useState } from 'react';

import AdminHeader from '../AdminHeader';
import CreateArticleHeader from './CreateArticleHeader';
import CreateArticleTitle from './CreateArticleTitle';
import CreateArticleImg from './CreateArticleImg';
import CreateArticleContent from './CreateArticleContent';
import { CreateArticleTypes } from '../../../../@types/CreateArticleTypes';

const CreateArticle: React.FC<CreateArticleTypes> = ({ handleAdd }) => {
  const [articleTitle, setArticleTitle] = useState<string>('');
  const [articleContent, setArticleContent] = useState<string>('');
  const [articlePerex, setArticlePerex] = useState<string>('');

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const handleNewBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBlog = {
      id: (Math.random() * 1000000).toString(),
      createdAt: `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
      }`,
      title: articleTitle,
      author: 'Martin Jurkov',
      perex: articlePerex,
      article: articleContent,
      comments: [{}],
    };

    handleAdd(newBlog);

    setArticleTitle('');
    setArticleContent('');
    setArticlePerex('');
  };

  return (
    <>
      <AdminHeader />

      <form onSubmit={handleNewBlog}>
        <div className='create__article'>
          <CreateArticleHeader />

          <CreateArticleTitle
            articleTitle={articleTitle}
            setArticleTitle={setArticleTitle}
          />

          <CreateArticleImg />

          <CreateArticleContent
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
