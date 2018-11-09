import React, { Component } from 'react';
import ChartList from './ChartList'
import GenreSelector from '../components/GenreSelector'

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: null
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    this.loadSongs(this.props.genres[0].url)
  }

  loadSongs(url){
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
  }

  handleSelectChange(event){
    this.loadSongs(event.target.value);
  }

  render(){
    return(
      <div>
        <h1>UK Top 20 Songs</h1>
        <GenreSelector handleSelectChange={this.handleSelectChange}
        genres={this.props.genres} />
        <ChartList className="chart-list" songs={this.state.songs}
        handleSelectChange={this.handleSelectChange} />
      </div>
    )
  }
}


export default ChartContainer;
