import React from 'react';
import Movie from './Movie';

const MyList = (props) => {
  return (
    <>
      <h1>WATCHLIST</h1>
      <ul>
        {props.myList.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie
                type="myList"
                movie={movie}
                onClickMovieHandler={props.onClickMovieHandler}
                onCheckBoxChangeHandler={props.onCheckBoxChangeHandler}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MyList;
