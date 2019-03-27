import React from 'react';
import './PostPage.css';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import Header from './Header';
import PostContainer from './PostContainer';

export default class PostPage extends React.Component {
  render() {
    return (
      <div className="PostPage">
        <Header
          onChange={this.props.onChange}
          onSubmit={this.onSearchFormSubmit}
          search={this.props.search}
        />
        {this.props.dummyData.length === 0 ? (
          <div className="spinner">
            <Loader type="Oval" color="#262626" height="60" width="60" />
          </div>
        ) : (
          this.props.filteredData.map(data => {
            return (
              <PostContainer
                key={data.id}
                id={data.id}
                img={data.imageUrl}
                username={data.username}
                date={data.timestamp}
                likes={data.likes}
                comments={data.comments}
                thumbnail={data.thumbnailUrl}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
                text={this.props.text}
              />
            );
          })
        )}
      </div>
    );
  }
}

Header.propTypes = {
  onChange: PropTypes.func
};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
};
