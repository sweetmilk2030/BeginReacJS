import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(props){
        super(props);
        this.StoreName = this.StoreName.bind(this);
        this.state = {
            students : [
                {
                    id: 1,
                    name: "A"
                },
                {
                    id: 2,
                    name: "B"
                }
            ]
        }
    }

    StoreName() {
        console.log(this.refs.myName.value);
    }

    Changed() {

    }

  render() {
    var data = this.state.students.map((student, index) => {
        return <div key={index}>
            <p>{student.id}</p>
            <input type="text" value={student.name} className="smt" onChange={ this.Changed }/>
        </div>
    })
    return (
      <div className="My-RefDemo">
        <input type="text" className="myName" ref="myName"/>
        <button onClick={ this.StoreName }>Save</button>
        <div>
            {data}
        </div>
      </div>
    );
  }
}

export default RefDemo;
