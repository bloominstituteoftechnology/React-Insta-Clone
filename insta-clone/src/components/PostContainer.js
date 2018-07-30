import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thumbnail: props.values.thumbnailUrl,
            images: props.values.imageUrl,
            username: props.values.username,
            likes: props.values.likes,
            comments: props.values.comments
        }
    }
    render() {
        return(
            <div className="postContainer">
               <h4><img className="userIcon" src={this.state.thumbnail} alt="userIcon" /><p>{this.state.username}</p></h4>
               <img src={this.state.images}  alt="insta" />
               <div className="likes">
                    <div>   
                        <i className="far fa-heart fa-2x"></i> <i className="far fa-comment fa-2x"></i>
                    </div>
                    <p>{this.state.likes} likes</p>
                </div>
               {this.state.comments.map(comment=> <Comments values={comment} key={Date.now()} />)} 
               <input type="text" placeholder="Comment" /><button>...</button>  
            </div>
        )
    }
}

PostContainer.PropTypes = {
    thumbnail: PropTypes.string,
    images: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
    comment: PropTypes.arrayOf(PropTypes.object)

}

export default PostContainer;