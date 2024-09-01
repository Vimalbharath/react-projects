import React from 'react';

const Categories = ({items}) => {
  const {id,title,category,price,img,desc}=items;
  return (
  <div className='menu-item'>

<div>
    {items.map((item)=>{
      return (<h2>hello</h2>)
    })
    }
    </div>
  </div>);
};

export default Categories;
