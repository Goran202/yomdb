import React from 'react';
import Movie from './Movie';

const MyList = (props) => {
  return (
    <>
      <h1>MY PRIVATE LIST</h1>
      <ul>
        {props.myList.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie
                type="myList"
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

export default MyList;
