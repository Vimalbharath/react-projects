import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const people=data;
  return (<main><section className='container'>
  <h3>{people.length} birthday remaining</h3>
    <List people={people}/>
  </section></main>
  );
}

export default App;
