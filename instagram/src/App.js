import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  state = { /*state is a special object that re-renders the component every time a value held within state changes changes*/
    posts: [] /*Establishing posts as a property of state*/
  };

  componentDidMount() { /*componentDidMount runs when the component is loaded to the page, or "mounted"*/
    this.setState({posts: dummyData}); /*Setting the value of posts within state to equal the array of dummyData*/
  }

  handleAddComment = event => { /*An event handler that takes text entered in add comment bar and adds it into the comment array within the post object*/

  };

  render() {
    return (
      <div className="App">
        <SearchBar /> {/*Inserted search bar component*/}
        {dummyData.map((post, index) => { {/*Mapping over each post object in dummy data and ...*/}
            return <PostContainer username={post.username} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} likes={post.likes} timestamp={post.timestamp} comments={post.comments} key={index}/>; {/*Creating a PostContainer component that passes each value to PostContainer as props*/}
        })} {/*end post creation map*/}
      </div>
    );
  }
}

export default App;