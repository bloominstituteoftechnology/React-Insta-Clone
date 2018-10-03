import React, {Component} from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import propTypes from 'prop-types';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: this.props.data
  }
  }
  componentDidMount() {
    this.setState({user: this.props.data})
  }
  render() {
    return (
      <section className='post-container'>
        <PostHeader  username={this.state.user.username}
                     thumbnailUrl={this.state.user.thumbnailUrl}/>
                   <img className='post-cta-image' src={this.state.user.imageUrl}
             alt={this.state.user.username} />
           <PostContent likes={this.state.user.likes}
                     comments={this.state.user.comments}/>
        <section className="post-time">
         {this.state.user.timestamp}
        </section>
      </section>
    );
  }
}
PostContainer.propTypes = {
  username: propTypes.object
}

export default PostContainer;
