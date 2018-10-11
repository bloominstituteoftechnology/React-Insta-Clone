
import React from 'react';
import SearchBarForm from './SearchBarForm.js';
import PostStream from '../PostStream/PostStream.js';


class SearchBarLogic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filteredPosts: [],
      };
    }
    searchPostsHandler = e => {
        const posts = props.unfilteredPosts.filter(p => {
          if (p.username.includes(e.target.value)) {
            return p;
          }
        });
        this.setState({ filteredPosts: posts });
      };
    
    render() {
      return (
        <div>
            <PostStream filteredPosts={this.state.filteredposts}></PostStream>
            <SearchBarForm searchPostsHandler={this.state.searchPostsHandler}></SearchBarForm>
        </div>
      );
    }
  }
 
  
export default SearchBarLogic;
