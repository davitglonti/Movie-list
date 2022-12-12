import React,{useState,useEffect} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import Top from './Top';
import MovieDetal from './MovieDetal';
import Category from './Category';
const Upcoming = () => {
 

  return (
    <div style={{backgroundColor:'green'}}>
      <h1 style={{textAlign:'center', fontSize:'60px'}}> upcoming movies</h1>
      <Category category={'upcoming'}/>
    </div>
    
  )
}

export default Upcoming