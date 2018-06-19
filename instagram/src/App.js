import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

  addNewComment = (event,index) => {
    console.log('Add comment fired in App.js')
    console.log(this.state.data)

    // 1. Make a shallow copy of data
    let data = [...this.state.data];
    
    // 2. Make a shallow copy of the item you want to mutate
    let dataObj = {...data[index]};
    
    // 3. Replace the property you're intested in
    dataObj.comments.push({
      username:'Guest',
      text:`${event.target.value}`
    });
    
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    // items[1] = item;
    
    // 5. Set the state to our new copy
    this.setState({
      data:data
    });

    
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="app-container">
          {this.state.data.map( (postObj,postIndex) =>  <PostContainer key={postObj.timestamp} postObj={postObj} postIndex={postIndex} addNewComment={this.addNewComment} />)}
       </div>
      </div>
    );
  }
}

export default App;
