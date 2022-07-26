import React from 'react';
import { Link } from 'react-router-dom';
import { BlogItemTypes } from '../@types/ComponentTypes';

import Cat1 from '../assets/Cat-small.jpg';

const BlogItem: React.FC<BlogItemTypes> = ({ item, handleArticleView }) => {
  return (
    <div className='item__blog'>
      <div className='item__left'>
        <div className='item__left--picture'>
          <img src={Cat1} alt='Cat-1' style={{ width: '30rem' }} />
        </div>
      </div>
      <div className='item__right'>
        <h1 className='item__right--title'>{item.title}</h1>
        <div className='item__right--author-date'>
          <p className='item__right--author'>{item.author}</p>
          <p className='item__right--date'>{item.createdAt}</p>
        </div>
        <span className='item__right--perex'>{item.perex}</span>
        <div className='item__right--read-comments'>
          <button
            className='btn item__right--btn'
            onClick={() => handleArticleView(item)}
          >
            <Link to={`/article/${item.id}`} className='item__right--link'>
              Read whole article
            </Link>
          </button>
          <p className='item__right--comments'>
            <span>4</span> comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
