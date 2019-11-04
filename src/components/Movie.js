import React from 'react';
import Watched from './Watched';

const Movie = (props) => {
  const renderButtonAndWatchList = (type) => {
    if (type === 'movieList') {
      return (
        <button onClick={() => props.onClickMovieHandler(props.movie, 'movieList')}>
          Add TO WATCHLIST
        </button>
      );
    } else if (type === 'myList') {
      return (
        <>
          <Watched
            movie={props.movie}
            onCheckBoxChangeHandler={props.onCheckBoxChangeHandler}
          />
          <button onClick={() => props.onClickMovieHandler(props.movie, 'myList')}>
            REMOVE FROM WATCHLIST
          </button>
        </>
      );
    } else if (type === 'movieListAdded') {
      return <button style={{ backgroundColor: 'red' }}>STORED IN WATCHLIST</button>;
    }
  };

  return (
    <div className="movie-container">
      <h4 className="movie-detail">Title: {props.movie.Title}</h4>
      <p className="movie-detail">Year: {props.movie.Year}</p>
      <p className="movie-detail">Type: {props.movie.Type}</p>
      {/* <p className="movie-detail">imdbID: {props.movie.imdbID}</p> */}
      {renderButtonAndWatchList(props.type)}
    </div>
  );
};

export default Movie;
