import React, { Component } from 'react';

class FormDemo extends Component {
      constructor(props) {
            super(props);
            this.onTextChange = this.onTextChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                userName: 'Hung',
                passWord: '',
                details: '26 years old',
                sex: 0,
                lang: 'vi',
                isHandSome: false
            }
      }

      onTextChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
      }

      onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
      }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="panel panel-primary">
                        <div className="panel-heading">
                              <h3 className="panel-title">Form</h3>
                        </div>
                        <div className="panel-body">
                              
                              <form onSubmit={this.onSubmit }>
                                  <div className="form-group">
                                      <label>User name</label>
                                      <input type="text" className="form-control" id="" placeholder="Your name"
                                      name = "userName"
                                      value={ this.state.userName }
                                      onChange={ this.onTextChange } />
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input type="password" className="form-control" id="" placeholder="Your pass word"
                                      name = "passWord"
                                      value={ this.state.passWord }
                                      onChange={ this.onTextChange } />
                                  </div>
                                  <div className="form-group">
                                      <label>Details</label>
                                      <textarea type="text" className="form-control" 
                                      name = "details"
                                      value={ this.state.details }
                                      onChange={ this.onTextChange } />
                                  </div>
                                  <div className="form-group">
                                      <label>Sex</label>
                                      <select name="sex" className="form-control" required="required"
                                        value={this.state.sex} onChange={this.onTextChange}>
                                          <option value={0} >Man</option>
                                          <option value={1} >Woman</option>
                                      </select>
                                  </div>
                                  <div className="form-group">
                                      <label>Language</label>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="lang" value="en" onChange={this.onTextChange}
                                                checked={this.state.lang === "en"}/>
                                                English
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="lang" value="vi" onChange={this.onTextChange}
                                                checked={this.state.lang === "vi"}/>
                                                Vietnam
                                            </label>
                                        </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="checkbox">
                                          <label>
                                              <input type="checkbox"
                                              name="isHandSome"
                                              checked={this.state.isHandSome}
                                              onChange={this.onTextChange}/>
                                              Your are handsome?
                                          </label>
                                      </div>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                  <button type="reset" className="btn btn-primary">Reset</button>
                              </form>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default FormDemo;
