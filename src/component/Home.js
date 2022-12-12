import React, {useState,useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link} from 'react-router-dom';
import '../Css/Home.css';

import MovieList from './MovieList';
const Home = () => {
  const [popular, setPopular]=useState([])
  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(res=> res.json())
    .then(data=> setPopular(data.results))
  }, [])
  console.log(popular)

  return (
    <>
    <Carousel
    showThumbs={false}
     autoPlay={true}
     transitionTime={3}
     infiniteLoop={true}
     showStatus={false}
    >
    
     {
      popular.map(movie=>(
        <Link style={{textDecoration:'none', color:'white'}} to={`/MovieDetal/${movie.id}`}>
         
        <div className='posterimg' key={movie.id}>
        
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
        </div>
        <div className='posterinformation'>
        <div className='posterimage-title'>
          {movie.original_title}
        </div>
        <div className='poster-release'>
          {movie.release_date}
          
          <p className='poster-rating'>
            {movie.vote_average}
          </p>
        </div>
        <div className='poster-overview'>
          {movie.overview}
        </div>
        </div>
        </Link>
         
      ))
      }
    </Carousel>
    <MovieList/>
    
    </>
  )
}

export default Home