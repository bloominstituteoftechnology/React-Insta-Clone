import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import CommentInput from './CommentInput';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.com,
            comment: '',
        }
    }

    componentDidMount() {
        const id = this.props.postid;
        if(localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postid))
            });
        } else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postid,
            JSON.stringify(this.state.comments)
        );
    }

    commentHandler = e => {
        this.setState({
            comment: e.target.value
        });
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newCom = { 
            username: localStorage.getItem('user'),
            text: this.state.comment,             
        };

        const comments = this.state.comments.slice();
        comments.push(newCom);

        this.setState({
            comments, comment: '',
        });

        setTimeout(() => {
            this.setComments();
        }, 500);
    }


    render() {
        return (
            <div>
                {this.state.comments.map((com, index) => 
                    <CommentSection key={index} com={com}/>
                )}
                
                <CommentInput 
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
            </div>
        )
    }

}

CommentContainer.propTypes = {
    com: PropTypes.array,
    postid: PropTypes.string,
}


export default CommentContainer;