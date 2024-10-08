import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
    return []
  }
}

function App() {
  const[name,setName]=useState('');
  const[list,setList]=useState(getLocalStorage());
  const[isEditing,setIsEditing]=useState(false);
  const[editID,setEditID]=useState(null);
  const[alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''
  });

  const showAlert=(show=false,type='',msg='')=>{
    setAlert({show,type,msg})
  }

  const removeItem =(id)=>{
    showAlert(true,'danger','item removed')
    setList(list.filter((item) => item.id !==id))
  }

  const editItem=(id)=>{
    const specificItem=list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
    if(!name){
      //alerts
      showAlert(true,'danger','please enter values');
    }
    else if(name && isEditing){
      //code to edit
      setList(
        list.map((item)=>{
          if(item.id===editID){
            return {...item,title:name}
          }
          return item;
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true,'success','item changed')
    }
    else{
      const newItem={id: new Date().getTime().toString(), title: name}
      setList([...list,newItem])
      showAlert(true,'success','item added to list');
      setName('')
    }
  }
  return (<section className='section-center'>
    
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show &&<Alert {...alert} removeAlert={showAlert} />}
      <h3>Grocery bud</h3>
      <div className='form-control'>
      <input type='text' className='grocery' placeholder='e.g: eggs'
      value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button className='submit-btn' type='submit'>{isEditing? 'edit' :'submit'}</button>
      </div>
    </form>
    {list.length>0 && <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem}></List>
      <button className='clear-btn' onClick={()=>{setList('');
       showAlert(true,'danger','empty list');}
    }>clear items</button>
    </div>}
    

  </section>);
}

export default App
