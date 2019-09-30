import React, { Component } from 'react';
import TaskItem from  './TaskItem'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filterName: '',
        filterStatus: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] : value
    });
    this.props.onFilter(
        name ==='filterName' ? value : this.state.filterName,
        name ==='filterStatus' ? value : this.state.filterStatus
    );
  }

  render() {
    var { tasks, onUpdateStatus, onDeleteItem, onUpdateItem } = this.props;
    var { filterName, filterStatus } = this.state;
    var taskData = tasks.map((task, index) => {
      return <TaskItem key={task.id} data = {task} index={index} onUpdateStatus = { onUpdateStatus } onDeleteItem = { onDeleteItem } onUpdateItem = { onUpdateItem }/>
    });

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="Index">Index</th>
                    <th className="Name">Name</th>
                    <th className="Status">Status</th>
                    <th className="Action">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" name="filterName" className="form-control" required="required" onChange = { this.onChange } value = { filterName }/>
                    </td>
                    <td>
                        <select name="filterStatus" id="input" className="form-control" required="required" onChange = { this.onChange } value = { filterStatus }>
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Hidden">Hidden</option>
                        </select>
                    </td>
                </tr>
                { taskData }
            </tbody>
        </table>
    );
  }
}

export default TaskList;