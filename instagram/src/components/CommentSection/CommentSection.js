import React from 'react';
import '../styles/CommentSection.css';
import React, { Component } from 'react';
import React, { Component } from 'react';
  
class ComponentDidMountExample extends Component {
  constructor() {
    super();
    this.state = {
      thing: {}
    };
  }

  componentDidMount() {
    this.setState({ thing: this.props.data });
  }
  _handleKeyDown(event) {
    if (event.which === 13 && this.state.commentBody.trim().length > 0) {
      this.props.onSubmit(this.state.commentBody);
      this.setState({ commentBody: '' });
      this.commentInput.blur()
    }
  }
  render() {
    return (
      <div className="stuff">
        {`Prop data that got passed down:`}
        <input className="CommentSection__input" type="text" placeholder="Add a comment..." value={this.state.commentBody} onChange={this.onCommentChange}
            onKeyDown={this.handleKeyDown} ref={(ref) => {this.commentInput = ref}} />
        {this.state.thing ? 
          <div className="thing">
            <div className="thing-one">{this.state.thing.one}</div>
            <div className="thing-two">{this.state.thing.two}</div>
            </div> : null
          }
        </div>
      );
    }
  }
export default ComponentDidMountExample;