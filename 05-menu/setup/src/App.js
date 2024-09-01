import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map((item)=>
 item.category))];
function App() {
  const[menubar,setMenubar]=useState(allCategories);
  const[allitems,setAllitems]=useState(items);
  const filterItems=(category) =>{
    if(category==='all'){
      setAllitems(items);
    }
    const newItems=items.filter((item)=>item.category
    ===category);
    setAllitems(newItems);
  };
  return (
  <main>
    <section className='menu section'>
      <div className='title'>
      <h2>our dishes</h2>
      <div className='underline'></div>
      </div>
    <Menu filterItems={filterItems} menubar={menubar}/>
    <Categories items={allitems}/>
    </section>

  </main>);
}

export default App;
