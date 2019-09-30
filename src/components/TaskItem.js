import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.data.id);
  }

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.data.id);
  }

  onUpdateItem = () => {
    this.props.onUpdateItem(this.props.data.id);
  }

  render() {
    var { data, index } = this.props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td className="text-center">
                <span className={data.status === 'Active' ? 'label label-success' : 'label label-danger'}
                  onClick = { this.onUpdateStatus }>{data.status}</span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning mr-5" onClick = { this.onUpdateItem }>
                    <span className="fa fa-pencil mr-5"></span>Update
                </button>
                <button type="button" className="btn btn-danger" onClick = { this.onDeleteItem }>
                    <span className="fa fa-trash mr-5"></span>Delete
                </button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;