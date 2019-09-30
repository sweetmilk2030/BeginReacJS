import React, { Component } from 'react';
import Reset from './Reset'

class SizeSetting extends Component {
  constructor(props){
    super(props);
    this.setFontSizeDown = this.setFontSizeDown.bind(this);
    this.setFontSizeUp = this.setFontSizeUp.bind(this);
    this.onResetDefaul = this.onResetDefaul.bind(this);
  }
  setFontSizeDown() {
    this.props.onReceiveFontSize(this.props.fontSize - 1);
  }

  setFontSizeUp() {
    this.props.onReceiveFontSize(this.props.fontSize + 1);
  }

  onResetDefaul() {
    this.props.onResetDefaulColor();
  }

  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-warning">
                <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                        <button type="button" className="btn btn-warning" onClick={this.setFontSizeDown}>Down</button>
                        <button type="button" className="btn btn-success" onClick={this.setFontSizeUp}>Up</button>
                </div>
            </div>
            <Reset onResetDefaulSize = {this.onResetDefaul }/>
        </div>
    );
  }
}

export default SizeSetting;
