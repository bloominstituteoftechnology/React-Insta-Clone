import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser, faCompass, faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import dummyData from './dummy-data';
import './App.css';

library.add(faUser, faCompass, faHeart, faInstagram, faSearch, faComment, faEllipsisH);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: dummyData
    }
    // console.log(this.state.data);
  }

  componentDidMount() {
    console.log("Mounted");
    this.setState({
      data: dummyData,
    });

  }

  
  /* Handle Searchbar input */
  searchHandler = event => {
    event.preventDefault();
    
    if( event.keyCode === 13 && event.target.value.length > 0 ){
      //debugger;
      let newData = this.state.data.filter( (data) => {
        return data.username === event.target.value;
      });
      this.setState({ data: newData });
        event.target.value="";
    }
  };
  
  render() {
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
        {this.state.data.map( (data, index) => {
          // Pass each element to PostContainer:
            // id: 0
            // username: "philzcoffee",
            // thumbnailUrl:
            // imageUrl:
            // likes: 400,
            // timestamp: "July 17th 2017, 12:42:40 pm",
            // comments: []
          
          return (
            <PostContainer
              key={index} 
              id={index}
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
