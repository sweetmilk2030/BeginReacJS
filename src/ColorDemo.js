import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Result from './components/Result'
import './ColorDemo.scss'

class ColorDemo extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  color: 'red',
                  fontSize: 15
            }
            this.onSetColor = this.onSetColor.bind(this);
            this.onSetFontSize = this.onSetFontSize.bind(this);
            this.onResetDefaul = this.onResetDefaul.bind(this);
      }

      onSetColor(params) {
            this.setState({
                  color: params
            })
      }
      onSetFontSize(params) {
            this.setState({
                  fontSize: params
            })
      }
      onResetDefaul() {
            this.setState({
                  color: 'red',
                  fontSize: 15
            })
      }
  render() {
    return (
      <div className="container mt-50">
          <div className="row">
              <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
              <SizeSetting fontSize={this.state.fontSize} onReceiveFontSize={this.onSetFontSize} onResetDefaulColor = {this.onResetDefaul}/>
              <Result color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
      </div>
    );
  }
}

export default ColorDemo;
