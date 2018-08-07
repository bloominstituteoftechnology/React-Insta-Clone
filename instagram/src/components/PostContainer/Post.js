import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';


class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.post.likes,
            likeFlag: false
        }

    }
            incrementLikes = () => {
               if(this.state.likeFlag === false) {
                let likes = this.state.likes + 1;
                this.setState({ likes, likeFlag: true });
                }else {
                  let likes = this.state.likes - 1;
                this.setState({ likes, likeFlag: false})  
                }

            }
        
        render() {
            return (
                <div className="post-container">
                    <PostHeader
                        username={this.props.post.username}
                        thumbnailUrl={this.props.post.thumbnailUrl}
                    />
                    <div className="main-image">
                        <img src={this.props.post.imageUrl} className="post-image" alt="" />
                    </div>
                    <Likes 
                    likes={this.state.likes}
                    incrementLikes={this.incrementLikes} 
                    />
                    <CommentSection comments={this.props.post.comments} />
                </div>
            )
        }
        
    
}

export default Post;