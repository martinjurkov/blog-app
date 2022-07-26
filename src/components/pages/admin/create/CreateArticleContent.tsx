import React from 'react';
import { CreateArticleContentTypes } from '../../../../@types/CreateArticleTypes';

const CreateArticleContent: React.FC<CreateArticleContentTypes> = ({
  articleContent,
  setArticleContent,
  articlePerex,
  setArticlePerex,
}) => {
  return (
    <>
      <div className='create__perex'>
        <label className='create__perex--label'>Perex</label>
        <textarea
          typeof='text'
          className='create__perex--textarea'
          placeholder='Perex...'
          value={articlePerex}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setArticlePerex(e.target.value)
          }
        ></textarea>
      </div>
      <div className='create__content'>
        <label className='create__content--label'>Content</label>
        <textarea
          typeof='text'
          className='create__content--textarea'
          placeholder='Blog content...'
          value={articleContent}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setArticleContent(e.target.value)
          }
        ></textarea>
      </div>
    </>
  );
};

export default CreateArticleContent;
