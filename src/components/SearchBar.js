import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.onClickSearchBarHandler(e)}>
        <label htmlFor="movie-input">Unesi ime filma: </label>
        <input
          type="text"
          id="movie-input"
          value={props.stateValue}
          onChange={(e) => props.handleSearchBarChange(e)}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
