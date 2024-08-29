import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const{name, job, image, text}=people[index];
  const checkIndex=(index)=>{
    if(index>people.length-1){
    return 0;
    }
    if(index<0){
    return people.length-1;
    }
    return index;
  }
  const randomNumber=(index)=>{
    let random=Math.floor(Math.random()*people.length);
    if(random===index){
        random=index+1;
    }
    return setIndex(checkIndex(random));
  }
  const prevPerson=(index)=>{
   setIndex((index)=>{
    const newIndex=index+1;
    return checkIndex(newIndex);
    });
  }
  const nextPerson=(index)=>{
    setIndex((index)=>{
    const newIndex=index-1;
    return checkIndex(newIndex);
    });
  }
  return (<article className='review'>
    <div className='img-container'>
      <img src ={image} alt ={name} className='person-img'></img>
      <span className='quote-icon'>
          <FaQuoteRight />
      </span>
    </div>
    <div>
      <h3 className='author'>{name}</h3>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <button className='prev-btn' onClick={nextPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn'onClick={prevPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomNumber}>surprise me</button>


  </article>);
};

export default Review;
