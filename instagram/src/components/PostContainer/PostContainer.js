import React from 'react';
import styled from 'styled-components';
import Post from '../Post/Post';

const PCContainer = styled.div`
  position: relative;
  top: 76px;
  background-color: #fafafa;
  padding-top: 65px;
  width: 100%;
`;

const PCContentContainer = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.dummyData.map(log => {
        return log.comments;
      }),
      likes: props.likes
    };
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  updateComments = post => {
    this.state.comments.push(post);
    this.setState({
      comments: this.state.comments
    });
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
  };

  render() {
    return (
      <PCContainer>
        <PCContentContainer>
          {this.props.dummyData.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                dummyData={this.props.dummyData}
                comment={this.props.comment}
                updateComments={this.updateComments}
                commentEntries={this.state.comments}
                likes={this.state.likes}
              />
            );
          })}
        </PCContentContainer>
      </PCContainer>
    );
  }
}

export default PostContainer;
