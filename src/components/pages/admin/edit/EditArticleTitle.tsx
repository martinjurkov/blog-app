import React from 'react';
import { EditArticleTitleTypes } from '../../../../@types/EditArticleTypes';

const EditArticleTitle: React.FC<EditArticleTitleTypes> = ({
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

export default EditArticleTitle;
