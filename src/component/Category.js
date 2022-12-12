import React,{useState,useEffect} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
//categories 
const Category = ({category}) => {
  const [movieList, setMovieList] = useState([])
    const {type} = useParams()
 
    useEffect(() => {
      getData()
  }, [])

  useEffect(() => {
      getData()
  }, [type])

    const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }

  return (
   
    <div className='list__cards'>
        {
          movieList.map(movie => (
            <Link to={`/movieDetal/${movie.id}`} style={{textDecoration:'none', color:'black'}}>
                <Card movie={movie} />
            </Link>
        ))
  }
    </div>
    
  )
}

export default Category