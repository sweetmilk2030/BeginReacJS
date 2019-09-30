import React, { Component } from 'react';

class Child2 extends Component {
  //Cach 1
  // onClick(name){
  //   alert("Click me " + name);
  // }

     //Cach 2
     constructor(props){
      super(props);

      //Cach 3 khong can dong nay
      this.onClick = this.onClick.bind(this);
    }
  
    //Cach 2
    onClick(){
      alert(this.props.name + " " + this.props.price);
    }

    //Cach 3
    // onClick3 = () => {
    //   alert(this.props.name + " " + this.props.price);
    // }

  render() {
    return (
      <div className="My-Child2">
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <div>{this.props.children}</div>

        {/* Cach 1 */}
        {/* <button type="button" className="btn btn-primary" onClick={() => {this.onClick("hung")}}>Primary 1</button> */}

        {/* Cach 2 */}
        <button type="button" className="btn btn-primary" onClick={this.onClick}>Primary 2</button>


        {/* Cach 3 */}
        {/* <button type="button" className="btn btn-primary" onClick={this.onClick3}>Primary 3</button> */}
      </div>
    );
  }
}

export default Child2;
