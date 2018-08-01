import React from 'react';
import Comments from '../Comments';
import propTypes from 'prop-types';


class Post extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thumbnail: props.value.thumbnailUrl,
            images: props.value.imageUrl,
            username: props.value.username,
            likes: props.value.likes,
            comments: props.value.comments,
            temp: ''
        }
    }
    handleAddComment = (event)=> {
        event.preventDefault();
        if (this.state.temp.length > 0){
            this.props.value.comments.push({
            username: 'you',
            text: this.state.temp})
            this.setState({comments: this.props.value.comments})
            event.target.reset();
        }
    }
    handleComment = (event)=> {
        this.setState({temp: event.target.value});
    }
    incrementLike = () => {
        if (!this.state.likes.liked){
            this.setState(() => ({ likes: {
                count: this.state.likes.count+1,
                liked: true
                }
            }));
        }

    };
    render() {
        return(
            <div className="post">
                <h4><img className="userIcon" src={this.state.thumbnail} alt="userIcon" /><p>{this.state.username}</p></h4>
               <img src={this.state.images}  alt="insta" />
               <div className="likes">
                    <div>   
                        <i onClick={this.incrementLike} className="far fa-heart fa-2x"></i> <i className="far fa-comment fa-2x"></i>
                    </div>
                    <p>{this.state.likes.count} likes</p>
                </div>
               {this.state.comments.map((comment, i)=> <Comments values={comment} key={i} />)} 
                <form onSubmit={this.handleAddComment}>
                    <input type="text" placeholder="Comment" onChange={this.handleComment}/>
                    <button>...</button>  
                </form>
            </div>
        )
    }
}

postMessage.propTypes = {
    thumbnail: propTypes.string,
    images: propTypes.string,
    username: propTypes.string,
    likes: propTypes.number,
    comment: propTypes.arrayOf(propTypes.object)

}
export default Post;
