import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment';
import Input from "./Input";
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.idPost;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.idPost))
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
            this.props.idPost,
            JSON.stringify(this.state.comments)
        );
    }
    
    render() {
        return (
            <div className='comment-section'>           
            {this.state.comments.map((c, i) => <Comment comment={c} key={i}  />)}
            <Input />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;