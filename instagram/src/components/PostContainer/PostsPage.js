import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';

import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }


  searchPosts = (event) => {
      const term = event.target.value;

      if(term === '') {
        this.setState({data: dummyData});
      }

      const newList = this.state.data.filter(post => post.username === term);

      if(newList.length === 0) {
        return;
      }



      this.setState({
        data: newList})
    }



    componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: dummyData})
      }, 1000)
    }

  render() {
    return(
      <div className="posts-page">
        <SearchBar data={this.state.data}
                   searchHandler={this.searchPosts}
                   logout={this.props.logout}/>

        { this.state.data.length === 0 ? <h1 className="load">LOADING...</h1>
          : this.state.data.map(obj => <PostContainer key={Math.random()}
                                                            user={obj.username}
                                                            thumbnail={obj.thumbnailUrl}
                                                            image={obj.imageUrl}
                                                            time={obj.timestamp}
                                                            likes={obj.likes}
                                                            comments={obj.comments}/>)}
      </div>
    );
  }
}

PostsPage.propTypes = {
  logout: PropTypes.func,
}

export default PostsPage;
