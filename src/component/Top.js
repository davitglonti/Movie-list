import React,{useState,useEffect} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import Category from './Category';
const Top = () => {


  return (
   
    <div className='list__cards'>
      <Category category={'top_rated'}/>
    </div>
    
  )
}

export default Top