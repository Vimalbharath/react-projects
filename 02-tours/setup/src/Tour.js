import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
  const [showfull,setShowfull]=useState(false);
  return (<article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">$ {price}</h4>
      </div>
      
      <p>{showfull ? info : `${info.substring(0,200)}...`}
      <button onClick={()=>setShowfull(!showfull)}>
      { showfull ? 'show less' : 'show more'
      }
      </button>
      </p>
      <button className="delete-btn" onClick={()=> removeTour(id)}>
        Not interested
      </button>
    </footer>

    
  </article>);
};

export default Tour;
