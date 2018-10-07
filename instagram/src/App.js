import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.dummyData,
      comments: null,
    };

  }

  componentDidMount() {
   /*  this.getDummyData(); */
  }

 /*  showPrevPage = event => {
    if(this.state.prevPage !== null) {
      const newData = this.getCharacters(this.state.prevPage);
    /*   console.log(newData); 
    }
  } */

 /*  showCurrentChar = () => {
    const currentChar = this.state.dummyData.map((chars,index) => {
     this.key=this.index,
     this.char=this.chars.username,
     this.name= this.chars.name,
     this.thumb= this.chars.thumbnailUrl,
     this.time= this.timestamp,
     this.likes= this.char.likes,
     this.image= this.chars.image,
     this.comments= this.chars.comments,
    
    this.setState({ currentChar: currentChar})

  }) */
      
 /*  char={chars.username} name={chars.name} thumb={chars.thumbnailUrl} time={chars.timestamp}
      likes={chars.likes} image={chars.imageUrl} comments={chars.comments}
    })
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
      this.setState({ currentChar: currentChar, currentImage: currentImage});
  }
  returnToList = event => {
    this.setState({ currentChar: null }) */
  


  render() {
    return (

      <div className="App">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="postContainer">{dummyData.map((chars, index) => {
  return <PostContainer key={index} char={chars.username} name={chars.name} thumb={chars.thumbnailUrl} time={chars.timestamp}
    likes={chars.likes} image={chars.imageUrl} comments={chars.comments} />
})}  
        
        </div>

      </div>
    );
  }
}

export default App;
