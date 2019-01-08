import React from "react";
import CommentSection from './CommentSection';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes: props.post.likes
        }
    }

    
    //how to add only one like at a time?
    incrementLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    }

    render () {
        return (
            <div className="post-wrapper">
                <PostHeader username={this.props.post.username}
                thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-img-wrap">
                   <img alt = "post thumb"
                    className="post-image"
                    src={this.props.post.imageUrl}
                   /> 
                </div>
                <InstagramLikes 
                  incrementLikes={this.incrementLikes}
                  likes={this.state.likes}
                />
                <CommentSection comments={this.props.post.comments} />
            </div>
        )
    }
}


//map over posts and return Post images
const PostContainer = props => {
    return (
        <div className = "post-container">
            {props.posts.map (p=> <Post key={p.imageUrl} post ={p} />)}
        </div>
    )
}

//Instagram Likes
const InstagramLikes = props => {
    return [
        <div className ="insta-likes" key="insta-icons" onClick={props.incrementLikes}>

          <div className="insta-likes-wrapper">
            <i className="fa fa-heart" />
          </div>
         
          <div className = "insta-likes-wrapper">
              <i className="fa fa-comment" />
                </div>

            <div className="insta-likes" key="insta-likes-container">
              <div className="insta-likes-wrapper">{props.likes}</div>
             </div>
        </div>
    ]
}

//Post Header
const PostHeader = props => {
    return (
        <div className="post-header">
          <div className="post-thumb-wrap">
            <img alt="post header"
             className="post-thumb"
             src={props.thumbnailUrl}
            />
          </div>
          <div>{props.username}</div>
        </div>
    )
}




export default PostContainer