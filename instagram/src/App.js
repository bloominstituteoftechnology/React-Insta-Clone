import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      loggedIn: false
    };

    this.likeIncrement = this.likeIncrement.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    this.setState({data: dummyData});
    let username = localStorage.getItem('username');
    console.log(username);
    if (username.length > 0) {
      this.setState(function() {
        return {loggedIn: true}
      });
    }
  } 

  likeIncrement(index) {
    this.setState(function(prevState, props){
      return {[this.state.data[index].likes]: [prevState.data[index].likes++]}
    });
    this.setState(function(prevState, props){
      return {[this.state.data[index].liked]: true}
    });
    console.log([this.state.data[index].liked]);
  }

  filterData(event) {
    if(event.target.value === '') {
      this.setState({data: dummyData})
    } else {
      this.setState({filteredData: this.state.data.filter(item => item.username.includes(event.target.value))})
      this.setState(function(prevState, props){
        return {data: prevState.filteredData}
      })
    }
  }

  handleLogin = (user) => {
    console.log('should be logged in');
    localStorage.setItem('username', user);
  }
  

  render() {
    
    if (this.state.loggedIn === true) {
      return (
        <div className="App">
          <PostsPage data={this.state.data} filter={this.filterData} like={this.likeIncrement} />
        </div>
      );
    } else {
      return (
          <AuthenticatedApp handleLogin={this.handleLogin} />
      );
    }
  }
}

const AuthenticatedApp = Authenticate(App);

export default App;
