import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';
import heart from '../../assets/insta-heart.png';
import reply from '../../assets/insta-reply.PNG';  // For some reason, caps required for png
import commentOptions from '../../assets/insta-comment.PNG';
import Comment from '../Comment/Comment';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            likes: 0,
            time: '',
            input: '',
            liked: false,
        };
    }
    componentDidMount(){
        this.setState({
            comments: this.props.comments,
            likes: this.props.likes,
            time: this.props.time,
        });
    }
    handleCommentInput = (e) => {
        this.setState({ input: e.target.value });
    }
    addNewComment= () => {
        if (!this.state.input){
            alert('Please enter a comment');
            return;
        }
        this.setState((prevState) => {
            return {
                comments: prevState.comments.concat({ username: 'Test User', text: prevState.input, id: Date.now()}),
                input: '',
            };
        });
    }
    addNewLike = () => {
        this.setState((prevState) => {
            return {
                likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
                liked: !prevState.liked,
            };
        })
    }
    render(){
        return (
            <div className="comments">
                <div className="comment-icons">
                    <img src={heart} alt="fave button" draggable="false" onClick={this.addNewLike} />
                    <img src={reply} alt="reply button" draggable="false" />
                </div>
                <h5>{this.state.likes} like{this.state.likes !== 1 ? 's':null}</h5>
                <div className="comment-list">
                    {this.state.comments.slice(-5).map(comment => <Comment key={comment.id || comment.name + comment.text} name={comment.username} text={comment.text} />)}
                </div> {/* Adding ID's to my newly generated comments, but don't want to go modify dummy data. */}
                <p className="date">{moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</p>
                <form className='add-comment'>
                    <input 
                        type='text' 
                        placeholder='Add a Comment...' 
                        value={this.state.input} 
                        onChange={this.handleCommentInput} 
                        onKeyDown={ (e) => { if (e.keyCode===13) {
                            e.preventDefault();
                            this.addNewComment(); 
                        }}
                    }
                    />
                    <img src={commentOptions} 
                        alt='Comment options button' 
                        onClick={this.addNewComment}
                        draggable="false"
                    />
                </form>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    likes: PropTypes.number,
    time: PropTypes.string,
};

export default CommentSection;