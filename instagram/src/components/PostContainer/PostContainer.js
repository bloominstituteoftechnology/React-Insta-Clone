import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'


class PostContainer extends Component{
    // const post = props.post;
    // console.log(post);
    // let likes = 0;

    constructor(props){
        super();
        this.state = {
            post: props.post,
            comments: props.post.comments,
            likes: 0
        }
    }

    addLike = (event) =>{
        event.preventDefault();
        this.setState(prevState =>{
            return {
                likes: prevState.likes + 1
            }
        });

    }

    render(){

        return (
            <div className="post">
                <p><img src={this.state.post.thumbnailUrl} alt="thumbnail" width="30px" height="30px"/> {this.state.post.username}</p>
                <img src={this.state.post.imageUrl} alt="{this.state.post.username} advert"/>
                <div className="like-icons">
                    <a onClick={this.addLike} href="#"><i className="far fa-heart"></i></a>
                    <i className="far fa-comment"></i>
                </div>
                <p className="likes">{this.state.likes} likes</p>
                <CommentSection comments={this.state.post.comments}/>
            </div>
        )
    }

    // return (

    //     //receives individual post of postData array from
    //     //PostContainerList
    //     //render a post to UI, pass comment to CommentSection
    //     // <CommentSection />
    //     <div className="post">
    //             <p><img src={post.thumbnailUrl} alt="thumbnail" width="30px" height="30px"/> {post.username}</p>
    //             <img src={post.imageUrl} alt="{post.username} advert"/>
    //         <div className="like-icons">
    //             <i className="far fa-heart"></i>
    //             <i className="far fa-comment"></i>
    //         </div>
    //         <p className="likes">{likes} likes</p>
    //         <CommentSection comments={post.comments}/>
    //     </div>
    // )
}

export default PostContainer;