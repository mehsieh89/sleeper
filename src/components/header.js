import React, { Component } from 'react';
import ButtonContainer from './buttonContainer.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App-header">
        <h1>Sleeper Test</h1>
        <div className="sortContainer">
          <ButtonContainer
            sortState={this.props.sortState}
            changeSort={this.props.changeSort}
            sortStyle="All"
          />
          <ButtonContainer
            sortState={this.props.sortState}
            changeSort={this.props.changeSort}
            sortStyle="A-Z"
          />
          <ButtonContainer
            sortState={this.props.sortState}
            changeSort={this.props.changeSort}
            sortStyle="Z-A"
          />
        </div>
      </div>
    );
  }
}

export default Header;
