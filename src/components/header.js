import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleOnClick = () => {

  }

  render() {
    return (
      <div className="App-header">
        <h1>Sleeper Test</h1>
        <div className="buttonContainer">
          <div className="sortBtn" onClick={this.handleOnClick}> All </div>
          <div className="sortBtn" onClick={this.handleOnClick}> A - Z </div>
          <div className="sortBtn" onClick={this.handleOnClick}> Z - A </div>
        </div>
      </div>
    );
  }
}

export default Header;
