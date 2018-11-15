import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
      isSelected: false,
    }
  }

  logOut = () => {
    localStorage.removeItem('username');
    window.location.reload();
  }

  clearSearchText = () => {
    this.setState({
      searchText: '',
    })
  }

  hasBeenClicked = event => {
    if (event.target.className === "app") {
      return this.setState({
        isSelected: false,
      })
    } else if (this.state.isSelected) {
      return this.setState({
        isSelected: false,
      })
    } else {
      return this.setState({
        isSelected: true,
      })
    }
  }

  searchData = () => {
    if (this.state.searchText === '') {
      return this.state.data;
    } else {
      return this.state.data.filter(post => {
        return post.username.toLowerCase().includes(this.state.searchText.toLowerCase());
      })
    }
  }

  handlesChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.setState ({
      data: dummyData,
    });
  }
  
  render() {
    return (
      <div className="App">
        <PostsPage 
          data={this.searchData()}
          handlesChanges={this.handlesChanges} 
          searchText={this.state.searchText}
          searchData={this.searchData}
          isSelected={this.state.isSelected}
          hasBeenClicked={this.hasBeenClicked}
          clearSearchText={this.clearSearchText}
          logOut={this.logOut}
        />
      </div>
    );
  }
}


export default Authenticate(App);
