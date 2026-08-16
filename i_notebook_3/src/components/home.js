'use client';
import React from 'react';
import Notes from './Notes';
// import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="container my-3" style={{opacity:"95%"}}>
      
      
      <Notes ShowAlt={props.ShowAlt} mode={props.mode}/>

    </div>
  )
}

export default Home
