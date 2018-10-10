import React from 'react';
import PostContainer from '../PostContainer/PostContainer'
import SearchHeader from '../SearchBar/SearchHeader';
import dummyData from '../../dummy-data';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser, faComment } from '@fortawesome/free-regular-svg-icons';

library.add(faInstagram, faSearch, faBandcamp, faHeart, faUser, faComment);


class PostsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: [],
          filteredPosts: [],
          // filterTarget: ''
        }
      }

      componentDidMount() {
        this.setState({ posts: dummyData });
      }
    
      handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
          if (p.username.includes(e.target.value)) {
            return p;
          }
        });
        this.setState({ filteredPosts: posts });
      };

      render() {
        return (
            <div className="App">
            <SearchHeader           
              searchPostsHandler={this.searchPostsHandler}
              // filterTarget={this.state.filterTarget}
              />
            <PostContainer 
            data={            
              this.state.filteredPosts.length > 0
                  ? this.state.filteredPosts
                  : this.state.posts}
                  />
          </div>
        );
      }
}

export default PostsPage;