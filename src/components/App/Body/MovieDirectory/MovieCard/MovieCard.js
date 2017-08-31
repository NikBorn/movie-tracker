import React from 'react';

const MovieCard = ({ movie }) => {
  return(
    <div>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.posterImg}`} />
    </div>
  )
}

export default MovieCard
