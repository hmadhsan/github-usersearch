import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchUser: ""
  };

  onSearch = e => {
    this.setState({ searchUser: e.target.value });
  };

  onhandleFormSubmit = e => {
    e.preventDefault();
    this.props.onsubmit(this.state.searchUser); //that means when onsubmit prop which is coming from onApiSearchSubmit method..when user submit the form it will updt the state
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onhandleFormSubmit}>
          <div className="ui huge icon input">
            <input
              type="text"
              onChange={this.onSearch}
              placeholder="Username"
            ></input>
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
