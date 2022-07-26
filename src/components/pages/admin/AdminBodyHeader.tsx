import React from 'react';
import { Link } from 'react-router-dom';

const AdminBodyHeader = () => {
  return (
    <div className='admin__bodyHeader'>
      <div>
        <h1 className='admin__bodyHeader--header'>My Articles</h1>
      </div>
      <div>
        <button className='btn btn__admin--create'>
          <Link to='/create/article' className='btn__admin--create-link'>
            Create new article
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdminBodyHeader;
