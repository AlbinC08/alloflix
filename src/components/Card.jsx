import React from "react";
import { Link } from 'react-router-dom';
import Button from "./common/Button";



const Card = ({movie}) => {
    // const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=795529ce925313d351621bea7bce49bf&language=fr-FR`
    const URL_IMG = 'https://image.tmdb.org/t/p/original/'
    const url = `/films/${movie.id}`

    return (
        <div className="card-container"
            id={movie.id}>
            <Link to={url}>
            <img className="movieCard" src={`${URL_IMG}${movie.poster_path}`} alt={movie.original_title} />
                
                <Button
                label="Consulter"
                />
            </Link>


        </div>


    )



}

export default Card