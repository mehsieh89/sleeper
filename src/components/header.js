import React, { Component } from 'react';
import ButtonContainer from './buttonContainer.js';

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
        <div className="sortContainer">
          <ButtonContainer/>
          <div className="sortBtn" onClick={this.handleOnClick}> A - Z </div>
          <div className="sortBtn" onClick={this.handleOnClick}> Z - A </div>
        </div>
      </div>
    );
  }
}

export default Header;
