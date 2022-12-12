import React,{useState, useEffect} from 'react'
import "../Css/spinner.css";
import { Link } from 'react-router-dom';
import '../Css/Cards.css';
const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
  return (
 
    isLoading ? <div className="spinner-container">
    <div className="loading-spinner">
    </div>
  </div>: 
  
 
    <div className='cards'>
     
    <img className='card-image' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
        
        <div className='cards-full'>
            <span className='card-title'>{movie.original_title} </span>

            <h6 className='card-relasetime'>Release data: {movie.release_date}</h6>
           <p style={{fontSize:'10px'}}> {movie.overview.slice(0,100)}</p>
        
            <span className='card-ratings'><img src='https://play-lh.googleusercontent.com/8Wo6Eg3iUaLAz_tFaxGxW9QP3crthfIxXMILX84FMbQHgXHY2ewxf_lzYhpveG0iJQ' className='card-logo'/> {movie.vote_average} </span>
           
        </div>
    </div>

 
  )
}

export default Card