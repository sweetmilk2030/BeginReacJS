import React, { Component } from 'react';
import './Student.scss'
import TaskForm from './components/TaskForm'
import Controls from './components/Controls'
import TaskList from './components/TaskList'

class Student extends Component {
  constructor(props) {
    super(props);
    //this.onGenerateData = this.onGenerateData.bind(this);
    this.state = {
      tasks : [],
      isDisplayForm: false,
      itemUpdate: null,
      filter: {
        name: '',
        status: ''
      },
      keyWord: '',
      sorting: {
        by: '',
        sort: 1
      }
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks,
        isDisplayForm: false
      })
    }
  }

  onOpenForm = () => {
    this.setState({
      isDisplayForm: true,
      itemUpdate: null
    });
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
      itemUpdate: null
    });
  }

  S4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  GenerateId() {
    return this.S4() + this.S4() + this.S4() + '-' + this.S4() + this.S4() + this.S4() + this.S4() + '-' + this.S4() + this.S4();
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.GenerateId(),
        name: 'A',
        status: 'Hidden'
      },
      {
        id: this.GenerateId(),
        name: 'B',
        status: 'Active'
      },
      {
        id: this.GenerateId(),
        name: 'C',
        status: 'Hidden'
      },
      {
        id: this.GenerateId(),
        name: 'D',
        status: 'Active'
      },
    ];

    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onClose = () => {
    this.setState({
      itemUpdate: null
    });
    this.onToggleForm();
  }

  onSubmit = (data) => {
    var { tasks } = this.state;

    if(data.id === '') {
      var task = {
        id: this.GenerateId(),
        name: data.newname,
        status: data.status
      }
  
      tasks.push(task);
    } else {
      var indexItem = -1;
      tasks.forEach((task, index) => {
        if(task.id === data.id) {
          indexItem = index;
        }
      });
      tasks[indexItem].name = data.newname;
      tasks[indexItem].status = data.status;
      this.setState({
        itemUpdate: null
      });
    }


    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        task.status = task.status === 'Active' ? 'Hidden' : 'Active'
      }
    });
    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDeleteItem = (id)=> {
    this.onClose();
    var { tasks } = this.state;
    var indexItem = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        indexItem = index;
      }
    });

    tasks.splice(indexItem, 1);

    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateItem = (id) => {
    var { tasks, } = this.state;
    var indexItem = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        indexItem = index;
      }
    });

    var task = tasks[indexItem];
    this.setState({
      itemUpdate: task,
      isDisplayForm: true
    });
  }

  onFilter = (name, status) => {
    this.setState({
      filter: {
        name: name.toLowerCase(),
        status: status
      }
    });
  }

  onSearch = (keyWord) => {
    this.setState({
      keyWord:  keyWord.toLowerCase()
    })
  }

  onSort = (by, sort) => {
    this.setState({
      sorting:  {
        by: by,
        sort: sort
      }
    })
  }

  render() {
    var { tasks, isDisplayForm, itemUpdate, filter, keyWord, sorting } = this.state;
    if(filter) {
      if(filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      if(filter.status && filter.status !== 'All') {
        tasks = tasks.filter((task) => {
          return task.status.indexOf(filter.status) !== -1;
        })
      }
      if(keyWord) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(keyWord) !== -1;
        })
      }
      if(sorting.by === 'name') {
        tasks.sort((a, b) => {
          if(a.name > b.name) return sorting.sort
          else if(a.name < b.name) return -sorting.sort
          else return 0;
        })
      }else if (sorting.by === 'status') {
        tasks.sort((a, b) => {
          if(a.status > b.status) return sorting.sort
          else if(a.status < b.status) return -sorting.sort
          else return 0;
        })
      }
    }
    var elementForm = isDisplayForm ? <TaskForm onClose = { this.onClose } onSubmit = { this.onSubmit } itemUpdate = { itemUpdate }/> : '';

      return <div className="container">
          <div className="row">
              <div className="text-center">
                <h1>Jobs management</h1><br/>
              </div>
              <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                  { elementForm }
              </div>
              <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                  <button type="button" className="btn btn-primary" onClick={ this.onOpenForm }>
                      <span className="fa fa-plus mr-5"></span>Add new job
                  </button>
                  {/* <button type="button" className="btn btn-danger ml-5"
                    onClick={ this.onGenerateData }
                  >
                      Generate Data
                  </button> */}
                  <Controls onSearch = { this.onSearch } onSort = { this.onSort }/>
                  <div className="row mt-5">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks = {tasks} onUpdateStatus = { this.onUpdateStatus } onDeleteItem = { this.onDeleteItem } onUpdateItem = { this.onUpdateItem } onFilter = { this.onFilter}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  }
}

export default Student;
