import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
    super();

    this.state = {
      newComment: '',
    }
  }

  handleNewComment = (event) => {
    this.setState({newComment: event.target.value });
  }

  render() {
    return (
      <div className={'row'}>
          <div className={'col'}>
              <form onSubmit={this.handleForSubmit}>
                  <input className={'w-75 formInput'} onChange= {this.handleNewComment} placeholder='Comment Here!' value={this.state.newComment} />
              </form>
          </div>
      </div>
    );
  };
};

export default CommentSection;