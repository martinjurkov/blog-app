import React from 'react';

const EditArticleHeader = () => {
  return (
    <>
      <div className='edit__article--header'>
        <h1 className='edit__article--title'>Edit article</h1>
        <button type='submit' className='btn edit__article--btn'>
          Publish Article
        </button>
      </div>
    </>
  );
};

export default EditArticleHeader;
