import React, { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const CreateArticleImg = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          // write your building UI
          <div className='upload__image-wrapper'>
            <label className='upload__image-wrapper--label'>
              Featured Image
            </label>
            <button
              type='button'
              className='btn upload__image-wrapper--btn'
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload an Image
            </button>
            {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <img
                  src={image.dataURL}
                  alt=''
                  width='150'
                  className='image-item__img'
                />
                <div className='image-item__btn-wrapper'>
                  <button
                    className='btn image-item__btn-wrapper--update'
                    onClick={() => onImageUpdate(index)}
                  >
                    Upload New
                  </button>
                  <button
                    className='btn image-item__btn-wrapper--delete'
                    onClick={() => onImageRemove(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default CreateArticleImg;
