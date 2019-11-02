import React from 'react';

const SearchBar = () => {
  //   return <div>SearchBar</div>;
  return (
    <div>
      <label htmlFor="movie-input">Unesi ime filma: </label>
      <input id="movie-input"></input>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
