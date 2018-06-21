import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";
// import dummyData from "../dummy-data";
// import CommentSection from "../components/SearchBar/SearchBar";


const PostsPage = props => {
    return (
        <div className = "App">
        <SearchBar />
    <div className = "App-content">
    {props.dummyData.map(post =>(
        <PostContainer key={post.timestamp} dummyData={post} />
    ))}
     </div>
        </div>
    )
}
// class PostsPage extends Component {
//     constructor() {
//       super();
//       this.state = {
//         dummyData: props.dummyData
//       };
//     }
  
//     componentDidMount() {
//       this.setState({dummyData:dummyData});
//     }
    
  
//     render() {
//       return (
//         <div className="PostsPage">
//           <header className="Posts-header">
//           <SearchBar />
//           </header>
//           <div>
//             {this.state.dummyData.map(post => (
//               <PostContainer key={post.timestamp} dummyData={post} />
//             ))}
//           </div>
//         </div>
//       );
//     }
//   }

export default PostsPage;
