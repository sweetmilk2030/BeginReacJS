import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
        by: '',
        sort: 1
    }
  }

  onSort = (by, sort) => {
    this.setState({
        by: by,
        sort: sort
    });
    this.props.onSort(by, sort);
  }

  render() {
      var {by, sort} = this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle"
                    id="ddl1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Arrage <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="ddl1">
                    <li onClick={ () => this.onSort('name', 1) }>
                        <a role="button" >
                            <span className="fa fa-sort-alpha-asc pr-5">
                            &nbsp;&nbsp;A - Z
                            </span>
                            &nbsp;&nbsp;<i className={by === 'name' && sort === 1 ? 'fa fa-check' : ''} aria-hidden="true"></i>
                        </a>
                        
                    </li>
                    <li onClick={ () => this.onSort('name', -1) }>
                        <a role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                            &nbsp;&nbsp;Z - A
                            </span>
                            &nbsp;&nbsp;<i className={by === 'name' && sort === -1 ? 'fa fa-check' : ''} aria-hidden="true"></i>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={ () => this.onSort('status', 1) }>
                        <a role="button">
                            Active status
                            &nbsp;&nbsp;<i className={by === 'status' && sort === 1 ? 'fa fa-check' : ''} aria-hidden="true"></i>
                        </a>
                    </li>
                    <li onClick={ () => this.onSort('status', -1) }>
                        <a role="button">
                            Hidden status
                            &nbsp;&nbsp;<i className={by === 'status' && sort === -1 ? 'fa fa-check' : ''} aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sort;