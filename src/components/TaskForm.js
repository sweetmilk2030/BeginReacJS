import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            newname : '',
            status: 'Active'
        }
    }

    componentWillMount() {
        if(this.props.itemUpdate) {
            this.setState({
                id: this.props.itemUpdate.id,
                newname : this.props.itemUpdate.name,
                status: this.props.itemUpdate.status
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemUpdate) {
            this.setState({
                id: nextProps.itemUpdate.id,
                newname : nextProps.itemUpdate.name,
                status: nextProps.itemUpdate.status
            });
        } else if(!nextProps.itemUpdate) {
            this.state = {
                id: '',
                newname : '',
                status: 'Active'
            }
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onDiscard();
        this.props.onClose();
    }

    onDiscard = () => {
        this.setState({
            id: '',
            newname : '',
            status: 'Active'
        })
    }

    render() {
        var { id } = this.state;
        return <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            { id === '' ? 'Add New Job' : 'Update Job' }&nbsp;&nbsp;
                            <span className="fa fa-times-circle text-right" onClick={ this.props.onClose }></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit = { this.onSubmitForm }>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="newname"
                                    value = {this.state.newname }
                                    onChange = {this.onChange }/>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select name="status" className="form-control" required="required"
                                    value = { this.state.status } onChange = { this.onChange }>
                                    <option value="All">All</option>
                                    <option value="Active">Active</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                            <button type="button" className="btn btn-primary" onClick = { this.onDiscard }>Discard</button>
                        </form>
                    </div>
                </div>
    }
}

export default TaskForm;