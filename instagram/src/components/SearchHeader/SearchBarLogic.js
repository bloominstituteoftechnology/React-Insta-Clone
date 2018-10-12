import React from 'react';
import SearchBarForm from './SearchBarForm.js';
import PostStream from '../PostStream/PostStream.js';
//import PostInstance from '../PostInstance/PostInstance.js';

 class SearchBarLogic extends React.Component {
    constructor(props) {
      super(props);
     // console.log(props)
      this.state = {
        unfilteredPosts: props.unfilteredPosts, 
        filteredPosts: [],
      };
    //  console.log(this)
    }


    
    searchPostsHandler = e => {
   // console.log(this)
        const postArray = []
    this.state.unfilteredPosts.filter(p => {
       // console.log(this.state)
        if (p.username===e.target.value) {
            console.log(p)
            postArray.push(p)

        }
     console.log(postArray)
       return postArray;
        });
       // console.log(posts) 
        this.setState({ filteredPosts: postArray});
   
      };
      
    render() {
      // console.log(this.state.filteredPosts)
      return (
      
        <div>
           <PostStream filteredPosts={this.state.filteredposts}></PostStream>
           <SearchBarForm  searchTerm={this.state.searchTerm}
        searchPosts={this.searchPostsHandler}></SearchBarForm>
        </div>
      );
    }
  }
 
  
export default SearchBarLogic;
