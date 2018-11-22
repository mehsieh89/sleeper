import React, { Component } from 'react';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    this.props.changeSort(this.props.sortStyle);
  }

  render() {
    let bar = null;
    if (this.props.sortState === this.props.sortStyle) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="sortBox">
        <div className="sortBtn" onClick={this.handleOnClick}> {this.props.sortStyle} </div>
        {bar}
      </b>
    );
  }
}

  export default ButtonContainer;
