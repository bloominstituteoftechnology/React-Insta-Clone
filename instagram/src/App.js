import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';




class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ''
    }
  }

  likePost = (i) => {
    let newData = this.state.data.slice();
    newData[i].likes += 1;
    this.setState({data: newData});
  }


  handleChange = event => {
    event.preventDefault();
      this.setState({search: event.target.value.substr(0,20)})
  }

  searchFunc = event => {
    const updatedList = this.state.data.filter(item => {
      if (item.username.includes(event.target.value)) {
        return item;
      }
    });
    this.setState({search: updatedList});
  }

  logOut = () => {
    window.localStorage.removeItem('username');
    window.location.reload();
  }

  componentDidMount() {
    this.setState({
      data: dummyData,  
    });
  }


  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data}  
        likePost={this.likePost} 
        handleChange={this.handleChange} 
        searchFunction={this.searchFunc} 
        search={this.state.search} 
        searchTerm={this.state.searchTerm}
        logOut={this.logOut}
        />
      </div>
    );
  }
}
const AuthApp = Authenticate(App);

export default AuthApp;
