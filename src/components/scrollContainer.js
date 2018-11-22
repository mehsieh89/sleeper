import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);
  }

  row = ({ index, style }) => {
    let player = this.props.rendered[index].player;
    return (
      <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        <p>{player.first_name} {player.last_name}</p>
      </div>
    )
  };

  example = () => {
    return (
      <List
        className="list"
        height={600}
        itemCount={this.props.rendered.length}
        itemSize={70}
        width={800}
      >
        {this.row}
      </List>
    )
  };

  render() {
    return (
      <div className="container" key={Date.now()}>
        {this.example()}
      </div>
    );
  }
}

export default ScrollContainer;
