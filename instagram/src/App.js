import React, { Component } from 'react';
import uuid from 'uuid/v1';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  /*
  Create a function in app.js called addNewComment that takes in an event and an index number. The function will add the comment that is on the event object to the post that is at that index number.
  Pass the addNewComment function down the component tree to where ever you have your 'Add a comment...' input.
  The 'Add a comment...' input should be wrapped in a <form></form> element. Using that form's onSubmit event handler, invoke the addNewComment function and pass it the required arguments it needs to add a new comment.
  Update your state with the new comment (This should trigger your component tree to "re-render" with your new comment on that post).
*/

  addNewComment(event, index) {
    console.log('clicked!', event.target.value);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(d => {
          return (
            <PostContainer
              key={uuid()}
              data={d}
              addCommentHandler={this.addNewComment}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
