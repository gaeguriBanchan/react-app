import React from 'react';

const Avatar = ({ image, isNew }) => {
  return (
    <div>
      <img className='photo' src={image} alt='avatar' />
      {isNew && <span className='new'>new</span>}
    </div>
  );
};

export default Avatar;
