import React, { Component } from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';

class PostContainer extends Component {
  constructor() {
    super();
  }
render() {
  console.log("render postcontainer",this);
  return (
    <div className="PostContainer">
      {this.props.people.map(person => {
        return (
        <div className="people" key={person.timestamp}>
        <h4>{person.username}</h4>
        <img src={person.thumbnailUrl} alt=""/>
        <h4>{person.likes}</h4>
        <h4>{person.timestamp}</h4>
        <CommentSection comments={this.props.comments} />
        </div>);
      }
      )}

      
    </div>
  );
}
};



export default PostContainer;