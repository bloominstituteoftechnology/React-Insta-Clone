import React from 'react';

class AddComment extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addComment}>
        <input
          placeholder="Add Comment"
          value={this.props.inputValue}
          onChange={this.props.handleInput}
        />
      </form>
    );
  }
}

export default AddComment;
