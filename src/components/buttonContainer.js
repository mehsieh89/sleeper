import React, { Component } from 'react';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);
  }

  handleMouseHoverE() {
    this.setState({ isHovering: true });
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (isHovering) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="sortBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <div className="sortBtn" onClick={this.handleOnClick}> All </div>
        {bar}
      </b>
    );
  }
}

  export default ButtonContainer;
