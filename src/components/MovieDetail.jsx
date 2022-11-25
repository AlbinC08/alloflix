import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY } from './ListMovies';
import '../style/movieDetail.css';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
    const params = useParams();
    const URL_IMG = 'https://image.tmdb.org/t/p/original/'
    const URL = `https://api.themoviedb.org/3/movie/${params.idFilm}?api_key=${API_KEY}&language=fr-FR`;

    const getDetailMovies = () => {
      console.log(URL);
        Axios
          .get(URL)
          .then((res) => {
            const movie = res.data;
    
            setMovie(movie);
            console.log(movie);
            console.log(movie.genres[0].name);
          })
          .catch((error) => console.log("error = ", error));
      };

      useEffect(() => {
        getDetailMovies()
      }, [])

    return (
      <>
      {movie != null ?
        <div>
          <h3>{movie.original_title}</h3>
          <div className='movie-container' >
          {/* <button onClick={() => console.log(params)}>Show Params</button> */}
          <img src={`${URL_IMG}${movie.poster_path}`} alt="" />
          <div className="detail-container">
          <h4>Date de sortie : {movie.release_date} </h4>
          <h4>genre : {movie.genres != null ? movie.genres[0].name : null} </h4>
          <p>{movie.overview}</p>
          </div>
        </div>
        </div>
      :
        <h1>Chargement en cours...</h1>
      }
        </>
    );
};

export default MovieDetail