import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostsContainer from '../PostContainer/PostsContainer'
// import dummyData from '../../dummy-data';

const PostsPage = props => {
    return (
        <div>
            <SearchBar />
            <PostsContainer 
            posts={props.posts}
            />
        </div>
    )
};

// class PostsPage extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             posts: [],
//             filteredPosts: []
//         }
//     };

//     componentDidMount() {
//         this.setState({ posts: dummyData });
//     }

//     render() {
//         return (
//             <div>
//             <SearchBar 
//             searchTerm={this.state.searchTerm}
//             searchPosts={this.searchPostsHandler}
//             />
//             <PostsContainer 
//             posts={props.posts}
//             />
//             </div> 
//         )
//     }
// };  

export default PostsPage;