import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: this.dummyData,
      currentDummy: null,
      newDummy: null,
      nextCard: null,
      prevCard: null,
     
    };
  
  }

  componentDidMount() {
    this.getDummyData();
  }

  getDummyData() {
    dummyData.map((item,index) => ({
      name: `${dummyData[index].username}`,
      email: `${dummyData.email}`,
      thumbnailUrl: `${dummyData.thumbnailUrl}`,
      imageUrl: `${dummyData.imageUrl}`,
      likes: `${dummyData.likes}`,
      timestamp: `${dummyData.timestamp}`,
     
    
    })
   
  )
    this.setState({
      dummyData })
     
      const newDummy = dummyData[0].timestamp
      console.log(newDummy)
    
dummyData.map((Chars,index) => ({

}))

      this.setState({ newDummy: newDummy});
      console.log(this.currentDummy)
     // dummyData.forEach(showCurrentChar);
  }
  
    
  /* {props.comments.map((comment, index) => {
    return <Comment user={comment.username} comments={comment.text} key={index} />;
  })} */
 
  render() {
      return (
  
      <div className="App">
        <div className="searchBar"><SearchBar /></div>
        <div className="postContainer">{dummyData.map((chars,index) => {
         return <PostContainer key={index} char={chars.username} name={chars.name} thumb={chars.thumbnailUrl} time={chars.timestamp}
         likes={chars.likes} image={chars.imageUrl} comments={chars.comments}/>
        })}
       </div>
               
      </div>
    );
  }
}

export default App;
