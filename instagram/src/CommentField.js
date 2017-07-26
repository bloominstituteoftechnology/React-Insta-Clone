import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class CommentField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e) {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <FormControl
        className='textBox'
        type='text'
        placeholder='Add a comment...'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }

}

export default CommentField;
