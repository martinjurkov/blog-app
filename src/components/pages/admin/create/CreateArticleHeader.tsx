import React from 'react';

const CreateArticleHeader = () => {
  return (
    <>
      <div className='create__article--header'>
        <h1 className='create__article--title'>Create new article</h1>
        <button type='submit' className='btn create__article--btn'>
          Publish Article
        </button>
      </div>
    </>
  );
};

export default CreateArticleHeader;
