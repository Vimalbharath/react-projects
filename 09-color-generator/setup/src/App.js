import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState('');
  const [error,setError]=useState(false);
  const [list,setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
    try{
      let colors = new Values(color).all(10)
      setList(colors);
      setError(false);
      console.log(colors);

    }
    catch(error){
      setError(true);
      console.log(error);
    }
  }
  return (<>
    <section className='container'>
      <h3>Enter the value:</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={color}placeholder='#f15025' onChange={(e)=>setColor(e.target.value)}
        className={`${error ?'error': null}`}></input>
        <button className='btn' >Submit</button>
      </form> 
    </section>
     <section className='colors'>
      {
        list.map((solocolor,index)=>{
          return <SingleColor key={index} {...solocolor} index={index} hex={solocolor.hex}></SingleColor>
        })
      }
       
    </section>
    </>
  )
}

export default App
