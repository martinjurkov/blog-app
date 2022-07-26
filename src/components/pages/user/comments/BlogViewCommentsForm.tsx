import React from 'react';

import MyPhoto from '../../../../assets/martin-img.jpeg';

const BlogViewCommentsForm = () => {
  return (
    <div>
      <form>
        <div>
          <img
            src={MyPhoto}
            alt='myPhoto'
            style={{ width: '3.5rem' }}
            className='blog__comments--img'
          />
          <input
            type='text'
            placeholder='Join the discussion'
            className='blog__comments--input'
          />
        </div>
      </form>
    </div>
  );
};

export default BlogViewCommentsForm;
