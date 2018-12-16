import React, { Component } from 'react';

import dummyData from './dummy-data';

import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData:[],
      userSearch: ""
    }
  }

componentDidMount(){
  setTimeout(()=>{
    this.setState({dummyData:dummyData})
  }, 2000)
}

//handles state for SearchBar in this component
changeHandler= event=>{
  this.setState({[event.target.name]: event.target.value})
}

//update app's state with new comment
updateComments = (index,text) =>{
  this.setState((prevState,props)=>{
    const posts = prevState.dummyData.slice();
    posts[index].comments.push({username:"nole",text:text});
    
    return {dummyData: posts};

  })
}

updateLikes = (index,liked)=>{
  this.setState((prevState,props)=>{
    const posts = prevState.dummyData.slice();
    liked? posts[index].likes+=1:posts[index].likes-=1;
    return{dummyData: posts}
  })
}

  render() {
    const re = new RegExp(this.state.userSearch,'i');
    return (
      <div className="App">
        <SearchBar changeHandler={this.changeHandler} userSearch={this.state.userSearch} />
        <div className="posts-wrapper">
          {this.state.dummyData.length === 0? <p>LOADING</p>:
            this.state.dummyData.filter(e=>{return e.username.match(re)}).map((post,i)=>{
              return <PostContainer 
                key={i}  
                post={post} 
                index={i} 
                updateComments={this.updateComments} 
                updateLikes= {this.updateLikes}
                />
            })
          }          
        </div>
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display