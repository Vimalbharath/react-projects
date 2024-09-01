import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (<main>
    <section className='title'>
      <h2>our dishes</h2>
      <div className='underline'></div>
    </section>
    <Menu/>
    <Categories items={items}/>

  </main>);
}

export default App;
