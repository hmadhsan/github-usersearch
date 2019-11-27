import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {} //object..that will define in setstate
    };
  }

  onApisearchSubmit = user => {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          user: {
            name: data.name,
            location: data.location,
            followers: data.followers,
            username: data.login,
            image: data.avatar_url
          }
        });
      });
  };

  componentDidMount() {
    this.onApisearchSubmit();
  }
  render() {
    return (
      <div>
        <Header />
        <SearchBar onsubmit={this.onApisearchSubmit} />
        {/* onsubmit is a prop that is passing to SearchBar component */}
        <UserCard userdata={this.state.user} />
      </div>
    );
  }
}

export default App;
