import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import User from '../Styles/Reusables/User';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: [],
      likes: null,
      filteredData: [] 
    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.dummyData,
      comment: this.props.comment,
      likes: this.props.likes,
      filteredData: this.props.filteredData
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({ filteredData: newProps.filteredData });
  }
  
  handleLike(e) {
    const container = e.target.parentNode.parentNode.parentNode;
    const containerIndex = container.dataset.index;
    const newLikes = this.state.likes;
    newLikes[containerIndex] += 1;
    this.setState({ likes: newLikes });
  }

  render() {    
    return (
      <div>
        {this.state.data.map((postObject, index) => {
          const {username, thumbnailUrl, imageUrl, likes, timestamp} = postObject;
          // if no filteredData at the start
          if (! this.state.filteredData) {
            return (
              <div className="post-container" data-index={ index }>
                <User username={ username } thumbnailUrl={ thumbnailUrl } />
                <img src={ imageUrl } alt={ username } />
                <ActionButton handleLike={ this.handleLike.bind(this) }/>
                <p className="likes">{ this.state.likes ? this.state.likes[index] : 0 } likes</p>
                <CommentSection data={ this.state.data } comment={ this.state.comment } index={ index } timestamp={ timestamp } />
             </div>
            )
          } else {
          // if there is filteredData passed in
            // if there is no search result
            if (this.state.filteredData[index].length === 0) {
              return (
                <div></div>
              )
            } else {
              // show matched result
              return (
                <div className="post-container">
                  <User username={username} thumbnailUrl={thumbnailUrl} />
                  <img src={ imageUrl } alt={ username } />
                  <ActionButton />
                  <p className="likes">{ likes } likes</p>
                  <CommentSection data={ this.state.data } comment={ this.state.comment } index={index} timestamp={timestamp} />
                </div>
              )
            }
          }
        })}
      </div>
    )
  }
}

const ActionButton = props => {
  return (
    <div className="action-buttons">
      <span className="icon" onClick={ props.handleLike }><i className="far fa-heart"></i></span>
      <span className="icon"><i className="far fa-comment"></i></span>
    </div>
  )
}

export default PostContainer;