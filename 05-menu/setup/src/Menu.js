import React from 'react';

const Menu = ({filterItems,menubar}) => {
  return (
    <div className='btn-container'>
      {menubar.map((single)=>
      <button className='filter-btn' onClick={()=> filterItems(single)}>
        {single}
      </button>
      )}
      
    </div>

  );
};

export default Menu;
