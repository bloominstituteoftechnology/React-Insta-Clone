import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Login from './components/Login/Login'
import './App.css';
import authenticate from './components/authentication/authenticate';
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from './dummy-data';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: props.username,
      password: "",
      loggedIn: props.loggedIn,
      profilePage: false,
      postPage: true,
      dummyData: [],
      filteredData: [],
      search: '',
      storage: '',
    }
  }
 goToProfile = () =>{

    }
  // userLogIn = () =>{
  //   if(this.state.loggedIn === true){
  //     let newUsername = localStorage.getItem('username');
  //     console.log(newUsername);
  //     this.setState({username: newUsername});
  //   }
  //   this.setState({username: ''})
  // }
  // componentDidMount(){
  //   userLogIn();
  // }
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
    if(ev.target.name === 'search'){
        console.log('filterSearch');
    const filtered = this.state.dummyData.filter(post=>{
      if(post.username.includes(ev.target.value)){
        localStorage.setItem('search', post)
        return post
      }
    });
    this.setState({filteredData: filtered});
    console.log(localStorage.search);
    }
  }
  componentDidMount(){
    console.log('CDM is running');
    fetch(DummyData)
    .then(
      this.setState({
        dummyData: DummyData,
      })
      )
      .catch(err => console.log('noooo'));
  }
  render() {
    
    return (

      <div className="App">
         <SearchBar 
        handleChanges={this.handleChanges}
        logout={this.props.logout}
        username={this.props.username}
        />
        {this.state.profilePage === false 
        ? <PostPage 
        dummyData={this.state.dummyData}
        filteredData={this.state.filteredData}
        username={this.state.username}
        logout={this.props.logout}
        />
        : <ProfilePage />
        }
      </div>
    );
  }
}


export default authenticate(App)(Login);