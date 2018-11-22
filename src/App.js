import React, { Component } from 'react';
import { data } from './data.js';
import Header from './components/header.js';
import ScrollContainer from './components/scrollContainer.js';
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
        this.setState({rendered: newSortedArray});
      }
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <Header
          sortState={this.state.sortState}
          changeSort={this.changeSort}
        />
        <ScrollContainer
          rendered={this.state.rendered}
        />
      </div>
    );
  }
}

export default App;
