import React from 'react';
import { Link } from 'react-router-dom';
import { AdminBlogItemTypes } from '../../../@types/PagesAdminTypes';

import EditIcon from '../../../assets/—Pngtree—pencil line black icon_3746331.png';
import DeleteIcon from '../../../assets/—Pngtree—delete icon_4420857.png';

import ConfirmDelete from '../../modals/ConfirmDelete';

const AdminBlogItem: React.FC<AdminBlogItemTypes> = ({
  item,
  handleArticleView,
  setViewDeleteModal,
  viewDeleteModal,
  handleDelete,
}) => {
  return (
    <>
      <div className='admin__item'>
        <button
          className='btn admin__item--title'
          onClick={() => handleArticleView(item)}
        >
          <Link to={`/article/${item.id}`} className='admin__item--title-link'>
            {item.title}
          </Link>
        </button>
        <p className='admin__item--perex'>{item.perex}</p>
        <p className='admin__item--author'>{item.author}</p>
        <p className='admin__item--comments'>4</p>
        <div>
          <button
            className='btn btn__edit-delete'
            onClick={() => handleArticleView(item)}
          >
            <Link to={`/edit/article/${item.id}`}>
              <img src={EditIcon} alt='EditIcon' style={{ width: '2.5rem' }} />
            </Link>
          </button>
          <button
            className='btn btn__edit-delete'
            onClick={() => handleDelete(item.id)}
          >
            <img
              src={DeleteIcon}
              alt='DeleteIcon'
              style={{ width: '2.5rem' }}
            />
          </button>
        </div>
      </div>
      {viewDeleteModal && (
        <ConfirmDelete
          item={item}
          setViewDeleteModal={setViewDeleteModal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default AdminBlogItem;
