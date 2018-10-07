import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  state = { /*state is a special object that re-renders the component every time a value held within state changes changes*/
    posts: [], /*Establishing posts as a property of state*/
    newComment: '' /*Holds the new comment as it's created in state*/
  };

  componentDidMount() { /*componentDidMount runs when the component is loaded to the page, or "mounted"*/
    this.setState({posts: dummyData}, () => {console.log(this.state.posts)}); /*Setting the value of posts within state to equal the array of dummyData*/
  }

  handleAddComment = event => { /*An event handler that takes text entered in add comment bar and adds it into the comment array within the post object*/
    event.preventDefault(); /*By default a submit button tries to submit info and reload page, but I am preventing it from doing that*/
    const postIndex = event.target.dataset.postnumber; /*Saving the index that is the unique number of the post that is being commented on so that the comment is not saved to all posts*/
    let postsCopy = this.state.posts; /*Saved entire posts array to postsCopy*/
    postsCopy[postIndex].comments.push({ /*Finding the item in the array at the proper index, and then pushing a new comment into it's comment array*/
      username: "ult1m4t3_H4CK3RR", /*hard-coded username*/
      text: this.state.newComment /*Setting the text of the new comment to the comment text that's been saved in the state*/
    });
    this.setState({posts: postsCopy}, () => {console.log(this.state.posts)}); /*Sets the  post array on state to be equal to the copy I edited*/
  };
  handleInput = event => {
    this.setState({newComment: event.target.value}); /*Every single time anything is typed in the comment box, the value for the new comment is updated in the state to reflect that.*/
  };

  render() {
    return (
      <div className="App">
        <SearchBar /> {/*Inserted search bar component*/}
        {dummyData.map((post, index) => { {/*Mapping over each post object in dummy data and ...*/}
            return <PostContainer /*Creating a PostContainer component that passes each value to PostContainer as props. First passes handleAddComment on this component.*/
                                  handleInput={this.handleInput} /*Passing the handleImput function to PostContainer*/
                                  handleAddComment={this.handleAddComment}  /*Passing the handleAddComment function to PostContainer*/
                                  username={post.username} 
                                  thumbnailUrl={post.thumbnailUrl} 
                                  imageUrl={post.imageUrl} 
                                  likes={post.likes} 
                                  timestamp={post.timestamp} 
                                  comments={post.comments} 
                                  key={index} /*Have key:index so it doesnt yell at me*/
                                  postNumber={index}/>; /*Passing postNumber, which is the index of the array to PostContainer*/
        })} {/*end post creation map*/}
      </div>
    );
  }
}

export default App;