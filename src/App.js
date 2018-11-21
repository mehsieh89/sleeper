import React, { Component } from 'react';
import { data } from './data.js';
import Row from './components/row.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data,
      hasMore: true,
      currentIndex: 20,
      currentRender: [],
    }
  }

  componentDidMount() {
    console.log(this.state.data.season_stats);
    let newRender = this.state.data.season_stats.slice(0, this.state.currentIndex);
    this.setState({
      currentRender: newRender
    })
  }

  //

  loadMore = () => {

  }

  render() {
    return (
      <div className="container">
        {
          this.state.currentRender.map((item, index) => {
            return (
              <Row
                playerData={item.player}
                key={index}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
