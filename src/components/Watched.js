import React from 'react';

const Watched = (props) => {
  const renderText = props.movie.watched ? 'WATCHED' : 'NOT WATCHED';

  return (
    <div>
      <input
        type="checkbox"
        name="nam"
        value={props.movie.watched}
        checked={props.movie.watched}
        onChange={() => props.onCheckBoxChangeHandler(props.movie.imdbID)}
      />
      {renderText}
      <br></br>
    </div>
  );
};

export default Watched;
