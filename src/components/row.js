import React, { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.playerData.first_name} {this.props.playerData.last_name}</p>
      </div>
    );
  }
}

export default Row;
