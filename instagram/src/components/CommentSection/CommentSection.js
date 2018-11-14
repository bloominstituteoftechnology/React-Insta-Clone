import React, {Fragment, Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []

        }        
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments,
            commentText: ''
        })
    }

    changeHandler = (event) => {
        this.setState({
            commentText: event.target.value
        })
    }
    
    addComment = (event) => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, { 
                username: 'username',
                text: this.state.commentText
            }]
        }, () => {
            this.setState({
                commentText: ''
            })
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
                <p className="timestamp">
                    {(moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()).toUpperCase()}
                </p>
                <form onSubmit={this.addComment}>
                    <input type="text" name="commentText" placeholder="Add a comment..." value={this.state.commentText} onChange={this.changeHandler} />
                </form>
            </Fragment>
        );
    }
    
    
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}


export default CommentSection;