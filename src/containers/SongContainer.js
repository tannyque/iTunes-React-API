import React, { Component } from 'react';
import SongList from './SongList'

class SongContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: null
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(songs => this.setState({songs: songs}))
  }

  render(){
    return(
      <div>
        <h1>Top 20 Songs</h1>
        <SongList className="song-list" songs={this.state.songs} />
      </div>
    )
  }
}


export default SongContainer;
