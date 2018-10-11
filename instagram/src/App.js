import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import PostPage from './components/PostContainer/PostPage';
import dummyData from './dummy-data';
import SearchBar from './components/PostContainer/SearchBar';
import Authenticate from './components/Autentication/Authenticate';
import LogIn from './components/Autentication/LogIn';
class App extends Component {
  constructor(){
        super();
        this.state={
          postData:{dummyData},
          username:{LogIn}
        }
    }

    logOut=event=>{
      const username=localStorage.key.username
    return dispatch=>{
      localStorage.removeItem(username);
      
      dispatch(LogIn({}));
      window.location.reload();
    }
         
  }
   
  render(){
    return (
      <div className="whole-app">
       <button onClick={this.logOut}/>
        <span><SearchBar/></span>
        <span className="post">
       {dummyData.map((post,index)=>{
         return(
           <PostContainer id={index}key={index}post={post}/>
         )
       })}
        </span>
      </div>
    )
  }
}
export default Authenticate(App);    
