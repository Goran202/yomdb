import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <>
      <h1>MY LIST</h1>
      <ul>
        {props.movieList.map((movie) => {
          return (
            <li key={movie.id}>
              <Movie movie={movie} onClickMovieHandler={props.onClickMovieHandler} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
