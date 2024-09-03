import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const[name,setName]=useState('');
  const[list,setList]=useState([]);
  const[isEditing,setIdEditing]=useState(false);
  const[editID,setEditID]=useState(null);
  const[alert,setAlert]=useState({show:false,msg:'',type:''});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
  }
  return (<section className='section-center'>
    
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show &&<Alert/>}
      <h3>Grocery bud</h3>
      <div className='form-control'>
      <input type='text' className='grocery' placeholder='e.g: eggs'></input>
      <button className='submit-btn' type='submit'>{isEditing? 'edit' :'submit'}</button>
      </div>
    </form>
    <div className='grocery-container'>
      <List></List>
      <button className='clear-btn'>clear items</button>
    </div>

  </section>);
}

export default App
