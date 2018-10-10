import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Icons = styled.section`
    display: flex;
    flex-direction: column;
`;

const PostLikes = styled.section`
    font-size: 14px;
    padding: 5px 0;
`;

class PostIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes : 0,
      counter: 1
    }
  }
  componentDidMount() {
    this.setState({likes: this.props.likes});
  }

  updateLikes = (e) => {
    this.setState({
      likes: this.state.likes + this.state.counter
    })
  }
  render() {
    return (
      <Icons>
        <section className='post-icons'>
          <FontAwesomeIcon icon='heart' onClick={this.updateLikes}/>
          <FontAwesomeIcon icon='comment-alt' />
        </section>
        <PostLikes>
        {this.state.likes} <span>likes</span>
    </PostLikes>
      </Icons>
    );
  }
}

export default PostIcons;
