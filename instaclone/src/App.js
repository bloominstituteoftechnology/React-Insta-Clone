import React, { Component } from 'react';

import dummyData from './dummy-data';
import myStorage from './Storage'

import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();

    //if there's nothing in local storage
    if(!myStorage.getObject('data')){
      //add the dummy data to local storage
      myStorage.setObject('data',dummyData);
    }
    
    this.state ={
      dummyData:[],
      userSearch: ""
    }
  }

  // when the component mounts  
  //I want to get the dummy data from the local storage
  componentDidMount(){
    setTimeout(()=>{
      this.setState({dummyData:myStorage.getObject('data')})
    }, 2000)
  }

  //only update local storage if the data has changed
  componentDidUpdate(){ 
    if(JSON.stringify(this.state.dummyData) !== JSON.stringify(myStorage.getObject('data'))){
      myStorage.setObject('data',this.state.dummyData)
    }
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