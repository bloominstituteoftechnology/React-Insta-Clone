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
            comments: this.props.comments,
            likes: this.props.likes,
            time: this.props.time,
            input: '',
            liked: false,
        };
    }
    componentDidUpdate(prevProps, prevState){
        if (JSON.stringify(prevProps.comments) !== JSON.stringify(this.props.comments)){
            this.setState({ comments: this.props.comments });
        }
    }
    handleCommentInput = (e) => {
        this.setState({ input: e.target.value });
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
                <form className='add-comment' onSubmit={(e) => { 
                    e.preventDefault();
                    this.props.onNewComment(this.state.input, this.props.index);
                    this.setState({ input: '' })
                }}>
                    <input 
                        type='text' 
                        placeholder='Add a Comment...' 
                        value={this.state.input} 
                        onChange={this.handleCommentInput} 
                    />
                    <img src={commentOptions} 
                        alt='Comment options button' 
                        onClick={() => {
                            this.onNewComment(this.state.input, this.props.index);
                            this.setState( { input: '' } );
                        }}
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