import React, { Component }  from 'react';
import './CommentSection.css'
var moment = require('moment');
class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: '',
            timestamp: '',
            likes: 0,
            liked: false
        };

    }

    componentDidMount() {
        this.setState({ comments: this.props.comments, timestamp: this.props.timestamp, likes: this.props.likes, liked: false });
    }

    addComment = event => {
        event.preventDefault();
        const commentObj = {
            username: 'GenericUsername',
            text: this.state.newComment
        };
        const commentArray = this.state.comments;
        commentArray.push(commentObj);
        this.setState({
            comments: commentArray,
            newComment: ''
        });
    }

    addLike = event => {
        let likes = this.state.likes;
        let liked = this.state.liked;
        let unlikedHeart = document.getElementById("unliked-heart");
        let likedHeart = document.getElementById("liked-heart");
        if (liked === false) {
            liked = true;
            likes++;
            unlikedHeart.classList.add("hidden");
            likedHeart.classList.remove("hidden");            
            this.setState({likes, liked});
        }
        else {
            liked = false;
            likes--;
            likedHeart.classList.add("hidden");
            unlikedHeart.classList.remove("hidden");
            this.setState({likes, liked});
        }
    }

    commentHandler = event => {
        this.setState({ newComment: event.target.value });
    }

    render() {
        return (
            <div className="comments">
                <div className="comments__header">
                    <div className="icon__favorite">
                    <input type="image" onClick={this.addLike}src="https://visualpharm.com/assets/343/Heart-595b40b65ba036ed117d1f0d.svg" alt="favorite" className="comments__icons" id="unliked-heart" />

                    <input type="image" onClick={this.addLike}src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Free-Download-PNG.png" alt="favorite" className="comments__icons hidden" id="liked-heart" />
                    </div>
                    <div className="icon__comment">
                        <img src="http://www.iconarchive.com/download/i89260/icons8/ios7/Very-Basic-Speech-Bubble.ico" alt="comment" className="comments__icons" />
                    </div>
                    <div className="icon__bookmark">
                        <img src="https://hotinsocialmedia.com/wp-content/uploads/2017/10/Instagram-Ribbon.png" alt="bookmark" className="comments__icons" />
                    </div>
                </div>
                    <div className="likes">
                    {this.state.likes} likes
                    </div>
                <div className="comments__section">
                    {this.state.comments ? this.state.comments.map((comment, i) => (
                        <div className="comments__wrapper" key={i}>
                            <div className="comments__user">{comment.username}</div>
                            <div className="comments__text">{comment.text}</div>
                        </div>
                    )) : "comments failed to load"}
                </div>
                    <div className="date">
                        {moment(this.state.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                    </div>
                    <div className="comments__add">
                        <input className="comments__add__input" type="text" placeholder="Add comment..." value={this.state.newComment} onChange={this.commentHandler}/>
                        <button type="submit" onClick={this.addComment}>Submit</button>
                    </div>
            </div>
        );
    }
}


export default CommentSection;