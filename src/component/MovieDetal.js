import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import "../Css/MovieDetal.css"
const MovieDetal = () => {
  const [MovieDetail, setMovieDetal] = useState()
  const {id} = useParams()
console.log(id)
  useEffect(() => {
      getData()
  }, [])
 

  const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieDetal(data))
  }
  console.log(MovieDetail)

  return (
    <>
      <div className="movie">
          <div className="movie__intro">
              <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${ MovieDetail?  MovieDetail.backdrop_path: null }`} />
          </div>
          <div className='movie-detals'>
            <div className='movieposter'>
              <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${ MovieDetail?  MovieDetail.poster_path: null }`}/>

            </div>
          </div>
          <div className='movie-right'>
          <div className="moviename">{MovieDetail ?MovieDetail.original_title : ""}</div>
              <div className="movietagline">{MovieDetail ?MovieDetail.tagline : ""}</div>
              {/* add imdb click */}
              {MovieDetail && MovieDetail.imdb_id && <a href={`https://www.imdb.com/title/${MovieDetail.imdb_id}`} style={{textDecoration:'none', color:'white'}}>
              <span className='card-ratings'><img src='https://play-lh.googleusercontent.com/8Wo6Eg3iUaLAz_tFaxGxW9QP3crthfIxXMILX84FMbQHgXHY2ewxf_lzYhpveG0iJQ' className='card-logo'/> {MovieDetail? MovieDetail.vote_average: ''}  </span>
              </a>}
              <div className="movie__runtime"> duration :{MovieDetail ? MovieDetail.runtime + " mins" : ""}</div>
              
              <div className="movie-releasetime"> Release data: {MovieDetail ? MovieDetail.release_date: ""}</div>
              <div> {MovieDetail ? MovieDetail.genres.map(genre=>(
                <span className='genre'>{genre.name} </span>
              )): ""}</div>
          </div>
        <div className='movieinformation'>
                  <h1>Synopsis</h1>
                  <div>{MovieDetail ? MovieDetail.overview: ''}</div>
        </div>
        <div className='movieLinks'>
        <div className="movielink"> Links</div>
        <span className='moviebutton'>
                {
                   MovieDetail && MovieDetail.homepage && <a href={MovieDetail.homepage} target="_blank" style={{textDecoration: 'none', color:"white"}}><p><span className="movie__homeButton movie__Button">Official website <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }

                </span>
                <span className='moviebuttonimdb'>
                {
                  MovieDetail && MovieDetail.imdb_id && <a href={`https://www.imdb.com/title/${MovieDetail.imdb_id}`} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton ">IMDb</span></p></a>
                }

                </span>

</div> 
        
      </div>
     
      <div className="movie_production">Production companies</div>

      <div className='productions'> {MovieDetail? MovieDetail.production_companies.map(production=>(
        <div className='producten'>
        <img className='productionImg' src={`https://image.tmdb.org/t/p/original${production.logo_path}`} alt=''/>
        <h1>{production.name}</h1>
        </div>
      )):null}</div>
  
      </>
  
  )
}

export default MovieDetal