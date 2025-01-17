import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <>
      <h1>MOVIE LIST</h1>
      <ul>
        {props.movieList.map((movie) => {
          const movieInMyList = props.checkIfMovieIsInMyList(movie.imdbID);
          const type = movieInMyList ? 'movieListAdded' : 'movieList';

          return (
            <li key={movie.imdbID}>
              <Movie
                type={type}
                movie={movie}
                onClickMovieHandler={props.onClickMovieHandler}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
