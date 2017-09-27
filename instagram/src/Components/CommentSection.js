import React, {Component} from 'react';
import { Media, MediaContent, Content, Control, Input, Icon, Field } from 'bloomer';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      newComment: ''
     };
  }

  componentDidMount() {
    this.setState({comments: this.props.comments});
  }

  handleChange = (e) => {
    this.setState({newComment: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.newComment) return;
    const newComment = {
      username: 'Joe',
      text: this.state.newComment
    };

    this.setState({comments: [newComment, ...this.state.comments], newComment: ''});
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, idx) => {
          return (
            <Media key={idx}>
              <MediaContent>
                <Content>
                  <p><strong>{comment.username}</strong> {comment.text}</p>
                </Content>
              </MediaContent>
            </Media>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <Field>
            <Control hasIcons>
              <Input placeholder="Add a comment..." onChange={this.handleChange} value={this.state.newComment}/>
              <Icon isSize="small" isAlign="right">
                <span className="fa fa-ellipsis-h" aria-hidden="true" />
              </Icon>
            </Control>
            <button style={{visibility: 'hidden'}}></button>
          </Field>
        </form>
      </div>
    );
  }
}

export default CommentSection;
