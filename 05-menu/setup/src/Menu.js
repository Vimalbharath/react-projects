import React from 'react';

const Menu = ({filterItems}) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={()=> filterItems('breakfast')}>
        breakfast
      </button>
    </div>

  );
};

export default Menu;
