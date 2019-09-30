import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  onSearch = (keyWork) => {
    this.props.onSearch(keyWork);
  }

  onSort = (by, sort) => {
    this.props.onSort(by, sort);
  }

  render() {
    return (
        <div className="row mt-5">
            <Search onSearch = { this.onSearch }/>
            <Sort onSort = { this.onSort }/>
        </div>
    );
  }
}

export default Controls;
