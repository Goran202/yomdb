import React from 'react';

const Movie = (props) => {
  return (
    <>
      <h4>Ime filma: {props.movie.name}</h4>
      <p>Actor: {props.movie.actor}</p>
      <button onClick={props.onClickMovieHandler}>Add me to private list</button>
    </>
  );
};

export default Movie;
