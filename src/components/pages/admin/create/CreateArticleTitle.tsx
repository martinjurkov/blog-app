import React from 'react';
import { CreateArticleTitleTypes } from '../../../../@types/CreateArticleTypes';

const CreateArticleTitle: React.FC<CreateArticleTitleTypes> = ({
  articleTitle,
  setArticleTitle,
}) => {
  return (
    <>
      <div className='article__title'>
        <label htmlFor='article__title' className='article__title--label'>
          Article Title
        </label>
        <input
          id='article__title'
          placeholder='My First Article'
          className='article__title--input'
          value={articleTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setArticleTitle(e.target.value)
          }
        />
      </div>
    </>
  );
};

export default CreateArticleTitle;
