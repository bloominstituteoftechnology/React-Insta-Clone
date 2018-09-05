import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';  
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

class App extends Component {
  constructor (){
    super();
    this.state={
      username: '',
      password: '' 
    };
  } 

  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.classList]: event.target.value });
  };

  login = event => {
    // this.setState(username: )
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);


  };

  render(){
    const AuthenticateApp = Authenticate(App);
    return(
      <div>

        <PostsPage />
        <Login  login={this.login} 
                handleInput={this.handleInput}
                username={this.state.username}
                password={this.state.password}/>

      </div>
      
    );

  }

  

  // componentDidMount(){

  //   this.setState({posts:dummyData});
  // }

  // render() {
  //   // console.log(this.state.posts);
  //   return (
  //     <div className="App">
  //       <SearchBar search={this.search} handleChange={this.handleChange} />
  //       <PostContainer 
  //         posts={this.state.posts}
  //         addNewComment={this.addNewComment}
  //         handleInputComment={this.handleInputComment}/>
  //     </div>
  //   );
  // }
}

export default App;

 