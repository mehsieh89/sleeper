import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import { data } from './data.js';
import Header from './components/header.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data,
    }
  }

  row = ({ index, style }) => {
    // console.log(index);
    // console.log(this.state.data.season_stats[index].player.first_name);
    // console.log(this.state.data.season_stats[index].player.last_name);
    // console.log(this.state.data.season_stats[index].player.position);
    let player = this.state.data.season_stats[index].player;

    return (
      <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        <p>{player.first_name} {player.last_name} {player.position}</p>
      </div>
    )
  };

  example = () => {
    return (
      <List
        className="list"
        height={600}
        itemCount={1000}
        itemSize={35}
        width={800}
      >
        {this.row}
      </List>
    )
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.example()}
        </div>
      </div>
    );
  }
}

export default App;
