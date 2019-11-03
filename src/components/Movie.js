import React from 'react';

const Movie = (props) => {
  const renderButton = (type) => {
    if (type === 'movieList') {
      return (
        <button onClick={() => props.onClickMovieHandler(props.movie, 'movieList')}>
          Add me to private list
        </button>
      );
    } else if (type === 'myList') {
      return (
        <button onClick={() => props.onClickMovieHandler(props.movie, 'myList')}>
          Remove me from my private list
        </button>
      );
    } else if (type === 'movieListAdded') {
      return (
        <button style={{ backgroundColor: 'red' }}>Already in your private list</button>
      );
    }
  };

  return (
    <div className="movie-container">
      <h4>Title: {props.movie.Title}</h4>
      <p>Year: {props.movie.Year}</p>
      <p>imdbID: {props.movie.imdbID}</p>
      {renderButton(props.type)}
    </div>
  );
};

export default Movie;
