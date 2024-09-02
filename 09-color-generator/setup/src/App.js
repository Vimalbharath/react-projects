import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState([]);
  const [error,setError]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('gello');
  }
  return (
    <section className='container'>
      <h3>Enter the value:</h3>
      <form>
        <input></input>
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </form> 
      <section>
      
    </section>
    </section>
    
  )
}

export default App
