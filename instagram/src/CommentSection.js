import React from 'react';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      comments: this.props.comments
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      username: 'LambdaSchool',
      text: this.state.input
    };
    this.setState({
      input: '',
      comments: [...this.state.comments, newComment ]
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
          this.state.comments.map((data, i) =>
             <li key={i}> <strong>{ this.state.comments[i].username }</strong> { this.state.comments[i].text } </li>
            )
          }
        </ul>
        <form onSubmit={ this.handleSubmit } >
          <input value={ this.state.input } onChange={ this.handleChange } placeholder='Add a comment...' />
        </form>
      </div>
    );
  }
}

export default CommentSection;