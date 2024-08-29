import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(1);
  const{name, job, image, text}=people[index];
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
      <FaChevronLeft className='prev-btn'/>
      <FaChevronRight className='next-btn'/>
    </div>
    <button className='random-btn'>surprise me</button>


  </article>);
};

export default Review;
