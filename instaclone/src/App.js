import React, { Component } from 'react';

import dummyData from './dummy-data';

import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData:[]
    }
  }

componentDidMount(){
  setTimeout(()=>{
    this.setState({dummyData:dummyData})
  }, 2000)
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
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.dummyData.length === 0? <p>LOADING</p>:
            this.state.dummyData.map((post,i)=>{
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