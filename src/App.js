import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import { data } from './data.js';
import Header from './components/header.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data.season_stats,
      rendered: data.data.season_stats,
      sortState: "All"
    }
  }

  changeSort = (style) => {
    this.setState({
      sortState: style
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let newSortedArray = this.state.data.slice();
    if(prevState.sortState !== this.state.sortState) {
      if(this.state.sortState === "A-Z") {
        newSortedArray.sort((a, b) => (a.player.last_name > b.player.last_name) - (a.player.last_name < b.player.last_name));
        this.setState({rendered: newSortedArray});
      } else if(this.state.sortState === "Z-A") {
        newSortedArray.sort((a, b) => (a.player.last_name < b.player.last_name) - (a.player.last_name > b.player.last_name));
        this.setState({rendered: newSortedArray});
      } else if(this.state.sortState === "All") {
        this.setState({rendered: newSortedArray})
      }
    }
  }

  row = ({ index, style }) => {
    let player = this.state.rendered[index].player;

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
        itemCount={this.state.data.length}
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
        <Header
          sortState={this.state.sortState}
          changeSort={this.changeSort}
        />
        <div className="container">
          {this.example()}
        </div>
      </div>
    );
  }
}

export default App;
