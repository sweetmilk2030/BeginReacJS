import React, { Component } from 'react';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.onReset = this.onReset.bind(this);
  }
  onReset() {
    this.props.onResetDefaulSize();
  }
  render() {
    return (
        <button type="button" className="btn btn-danger" onClick={this.onReset}>Reset</button>
    );
  }
}

export default Reset;
