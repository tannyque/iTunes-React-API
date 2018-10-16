import React from 'react';
import Song from '../components/Song.js'

const SongList = (props) => {
  if (props.songs === null) {
    return 'nothing to see here';
  }
  else {
    return (
      <ol>
         {props.songs.feed.entry.map((song, index) =>{
          return <Song song={song} key={index} />
        })}
      </ol>
    );
  }

}

export default SongList;
