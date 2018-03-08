import React, { Component } from 'react';


class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      // comments: [];
    }
  }

  

  render() {
  
    return (
      <div className="searchBar">
        <input type="text" placeholder="Search Here"/>
      </div>
    );
  }
};

export default CommentSection;