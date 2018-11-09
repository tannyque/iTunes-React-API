import React from 'react';
import Song from '../components/Song.js'

const ChartList = (props) => {
  if (props.songs === null) {
    return 'Loading...';
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

export default ChartList;
