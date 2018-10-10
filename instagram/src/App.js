import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';


const AuthApp = Authenticate(App);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchInputHandler = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    let searchValue = this.state.searchValue

    if (this.state.searchValue === ''){
      this.setState({
        data: dummyData 
      })
    } else {
      this.setState({
        data: this.state.data.filter(post => post.username.includes(searchValue))
    })
  }

  }
  
  render() {

    return (
      <div className="App">
        <AuthApp />
        <PostsPage />
      </div>
    );
  }
}

export default App;
