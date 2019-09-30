import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyWord);
  }

  render() {
    var { keyWord } = this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" name="keyWord" placeholder="Enter key word" value = {keyWord} onChange={this.onChange}/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary" onClick = { this.onSearch }>
                        <span className="fa fa-search mr-5"></span>
                    </button>
                </span>
            </div>
        </div>
    );
  }
}

export default Search;