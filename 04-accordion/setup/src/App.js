import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
  return (<main className='container'>
    <div>
      <h3>Questions and answers about the page</h3>
    </div>
    <div className='question'>
      {data.map((single)=>{
        return 'hello';
      })}
      <SingleQuestion />
    </div>
  </main>);
}

export default App;
