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
          data:[],
          input:''
        }
    }
    componentDidMount(){
      this.setState({
        data:dummyData
      })
    }

    logOut=event=>{
        
      localStorage.removeItem('user')
      window.location.reload();
  }
    handleSearch=str=>{
      const filterPost= dummyData.filter(post=>{
        return post.username.includes(str)
      })
      this.setState({data:filterPost})
    }
   
  render(){
    return (
      <div className="whole-app">
       <button onClick={this.logOut}>LogOut</button>
        <span><SearchBar
                handleSearch={this.handleSearch}
                dummyData={this.state.data}
                input={this.Input}
                />
        </span>
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
