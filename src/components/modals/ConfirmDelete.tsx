import React from 'react';

import { Link } from 'react-router-dom';
import { ConfirmDeleteTypes } from '../../@types/PagesModalTypes';

const ConfirmDelete: React.FC<ConfirmDeleteTypes> = ({
  setViewDeleteModal,
  handleDelete,
  item,
}) => {
  console.log(item);
  return (
    <>
      <div className='overlay' />
      <div className='modal__deletion'>
        <h3 className='modal__deletion--heading'>Confirm Deletion</h3>
        <p className='modal__deletion--text'>
          Are you sure you want to delete blog {`${item}`}? This action cannot
          be undone.
        </p>
        <div className='modal__deletion--btns'>
          <button
            className='btn modal__deletion--btns-cancel'
            onClick={() => setViewDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className='btn modal__deletion--btns-delete'
            onClick={() => console.log(item.id)}
          >
            <Link to='/admin/articles' className='modal__deletion--btns-link'>
              Delete
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
