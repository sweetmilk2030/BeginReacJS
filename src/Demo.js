import React, { Component } from 'react';
import './Demo.scss';
import Child from './Child';
import Child2 from './Child2';

class Demo extends Component {

 

  render() {
    var data = {
      name: "IPhone 5S",
      price: 10000000
    }
    return (
      <div className="My-Demo">
        <Child />
        <Child2 name={data.name} price={data.price}>
          <p>Im childrent</p>
        </Child2>
      </div>
    );
  }
}

export default Demo;
