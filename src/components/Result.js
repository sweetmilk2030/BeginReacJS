import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  setStyle() {
    return {
      color: this.props.color,
      fontWeight: 'bold',
      fontSize: this.props.fontSize,
      borderColor: this.props.color
    }
  }
  render() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color: {this.props.color} - Font-size : {this.props.fontSize + 'px'}</p>
            <div id="content" style={ this.setStyle() }>
              Bao Uyen
            </div>
        </div>
    );
  }
}

export default Result;
