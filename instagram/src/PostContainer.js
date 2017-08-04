import React, { Component } from 'react';
import DisplayComments from './DisplayComments';
import './PostContainer.css';


export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInput: '',
        };
    }
    componentDidMount() {
        console.log('PostContainer loaded and ready to go');
    }

    render() {
        if (this.props.posts.length > 0) {
            const posts = this.props.posts.map((post, i) => {
                return (
                    <div className="Post-Wrapper" key={i}>
                        <div className="Post-Head"><div className="User-Avatar"><img src={post.thumbnailUrl} /></div><div className="Post-Username"><span>{post.username}</span></div></div>
                        <img className="Post-Img" src={post.imageUrl} />
                        <div className="Comment-Like"><div className="Button Button-Like"><i className="fa fa-heart-o"></i></div><div className="Button Button-Comment"><i className="fa fa-comment-o"></i></div></div>
                        <div className="Post-Likes"><span>{post.likes} likes</span></div>
                        <DisplayComments comments={post.comments} />
                        <div className="Post-Timestamp">Posted {post.timestamp}</div>
                        <input className="Comment-Input" type="text" value="Add a comment..." />
                    </div>
                );
            });
            return (
                <div className="Post-Container">
                    {posts}
                </div>);
        } else return null;
    }
}

// const PostContainer = (props) => {
//     if (props.posts.length > 0) {
//         const posts = props.posts.map((post) => {
//             return (
//                 <div>
//                     <div>{post.username}</div>
//                     <img src={post.imageUrl} />
//                     <div>{post.likes} like</div>
//                     <div>{post.comments.length} comments</div>
//                     <div>Posted {post.timestamp}</div>
//                 </div>
//             );
//         });
//         return (
//             <div>
//                 {posts}
//             </div>);
//     }
//     return null;
//     // } else {
//     //
//     // }
// };

// export default PostContainer;
