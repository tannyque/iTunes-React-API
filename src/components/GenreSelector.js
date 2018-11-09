import React from 'react';

const GenreSelector = (props) => {
  return (
    <div className="genre-selector">
      <label htmlFor="genre-select">UK Top 20 by Genre:</label>
      <select id="genre-select" onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select>
    </div>
  );
}

export default GenreSelector;
