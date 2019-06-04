import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './component/PostContainer/PostContainer';

class App extends React.Component{

  constructor (props){
    super(props);
    this.state = {
     data:dummyData
    }
  }

  render(){
    return(
      <div>
        {this.state.data.map((post)=>(
          <PostContainer post={this.state.post}/>
        ))}
        <h2>heyyyy</h2>
      </div>
    )
  }
}

export default App;
