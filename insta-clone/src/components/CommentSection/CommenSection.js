import React from 'react'
import Comment from "./Comment";
import moment from 'moment';


class CommenSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    commentChange = (event) => {
        this.setState({comment: event.target.value})
    }

    addNewComment = (event) => {
        event.preventDefault();

        const comments = this.state.comments.slice();
        const newComment = {text: this.state.comment, username: 'sean_wu'}

        if (this.state.comment !== '') {
            comments.push(newComment);
            this.setState({comments, comment: ''})
        }
    }

    render() {
        const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a");
        const newTime = time.fromNow().toUpperCase();
        return (
            <div className='comments-container'>
                
                {/*THIS PART IS CREATING AN ERROR -----------------------------*/}
                {/*{this.state.comments.map((comment) => {*/}
                    {/*return <Comment key={index} comment={comment}/>*/}
                {/*})}*/}
                <p>{newTime}</p>
                <div className='comment-input'>
                    <form onSubmit={this.addNewComment}>
                        <input type='text' onChange={this.commentChange} placeholder='Add a comment'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommenSection



