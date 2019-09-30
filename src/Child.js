import React, { Component } from 'react';

class Child extends Component {
    showCondition(client) {
        if(client.active) {
            return <div>
                <p>Good</p>
            </div>
        }
    }

  render() {
      var variable = "Hung Ha";
      var a = 5;
      var b = 10;
      var client = {
          id: 1,
          name: "Kieu",
          address: "American",
          active: 0
      };

      var users = [
        {
            id: 1,
            name: "A",
            age: 14
        },
        {
            id: 2,
            name: "B",
            age: 15
        },
        {
            id: 1,
            name: "C",
            age: 16
        }
      ];

      var elements = users.map((user, index) => {
          return <div key={index}>
              <p>{user.name}</p>
          </div>
      })

    return (
      <div className="My-Child">
        <div className="alert alert-primary" role="alert">
            {variable} {a + b}
        </div>
        <div>
            <p>{client.id}</p>
            <p>{client.name}</p>
            <p>{client.address}</p>
        </div>
        <div>
            { this.showCondition(client) }
        </div>
        <div>
            {elements}
        </div>
      </div>
    );
  }
}

export default Child;
