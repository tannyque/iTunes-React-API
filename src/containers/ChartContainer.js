import React, { Component } from 'react';
import ChartList from './ChartList'

class ChartContainer extends Component {
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
        <ChartList className="chart-list" songs={this.state.songs} />
      </div>
    )
  }
}


export default ChartContainer;
