import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(1);
  const[text,setText]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
    setText(data);
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
    {
      text.map((para,index)=>{
        return  <p key={index}>{para}</p>
      })
    }
     
    </article>
  </section>
    )
}

export default App;
