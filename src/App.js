import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import { data } from './data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data,
    }
  }

  row = ({ index, style }) => {
    console.log(index);
    console.log(this.state.data.season_stats[index].player.first_name);
    console.log(this.state.data.season_stats[index].player.last_name);
    console.log(this.state.data.season_stats[index].player.position);
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
        height={150}
        itemCount={1000}
        itemSize={35}
        width={300}
      >
        {this.row}
      </List>
    )
  };

  render() {
    return (
      <div>
        {this.example()}
      </div>
    );
  }
}

export default App;


// {/* <Row
//   playerData={item.player}
//   key={index}
// /> */}
