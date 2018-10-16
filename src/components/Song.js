import React from 'react';

const Song = (props) => {
  return (
      <li className="song-title">
        <div className="song-title">
          <p>{props.song.title.label}</p>
          <img src={props.song['im:image'][2].label} alt={props.song.title.label}/>
          <audio src={props.song.link[1].attributes.href} className="preview-song" controls></audio>
        </div>
      </li>
  );
}

export default Song;
