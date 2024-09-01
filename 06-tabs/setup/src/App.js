import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://www.course-api.com/react-tabs-project'
function App() {
  const[loading,setLoading]=useState(true);
  const[jobs,setJobs]=useState([]);
  const[value,setValue]=useState(0);

  const fetchData=async()=>{
    try{const response= await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setLoading(false);}
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  if(loading){
    return (<section className='loading'>
      <h2>loading...</h2>
    </section>)
  }
  const{company,dates,duties,title}=jobs[value];


  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,index)=>{
            return <div className='job-desc'>
              <FaAngleDoubleRight className='job-icon'>
                
              </FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          })

          }
        </article>
      </div>
    </section>
  )
}

export default App
