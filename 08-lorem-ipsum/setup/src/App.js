import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(1);
  const[text,setText]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
  }
  
  return (
  <section className='section-center'>
    <h3>tired of being lorem ipsum ?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount' >
        Paragraph
      </label>
      <input type='number' name='amount' id='amount' value={count}
       onChange={(e)=>setCount(e.target.value)}
       ></input>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'> 
      <p>Vimal bharath is my name and I am from a country called Bharath</p>
    </article>
  </section>
    )
}

export default App;
