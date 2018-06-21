import React from 'react';
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'


class PostsPage  extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, 'hello')
        this.state = {
            post: props.posting,
            filteredPosts: [],
          }
    }
    
    filterSearch = e => {
             e.preventDefault();
             let post = this.state.post.filter(post =>{
                 if(post.username.includes(e.target.value)){
                     return post; 
                 }
             });
             this.setState({filteredPosts: post})
             }

    render() { 
        return (
            <div>
                <SearchBar 
                value = {this.state.value} 
                filterSearch = {this.filterSearch}                          
                />
                <PostContainer posts = {
                    this.state.filteredPosts.length > 0
                    ? this.state.filteredPosts: 
                    this.state.post
                    } 
                />
            </div>
          )
    }
}
 
export default PostsPage ;


// const PostsPage = props => {
//     console.log(props, 'hello')
//     return (
//         <div>
//         <SearchBar username = {props.posting} />
//         <PostContainer posts = {props.posting} />
//         </div>
//     )
// }
// export default PostsPage