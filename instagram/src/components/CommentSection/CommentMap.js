import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import './index.css';

class CommentMap extends React.Component {
    state = {
        comments: [],
        newComment: '',
        counter: 0,
        props: this.props,
        liked: false,
    };

    componentDidMount() {
        this.setState({ timestamp: this.props.userData.timestamp, comments: this.props.comments, likes: this.props.userData.likes, liked: false, });
    }

    onChange = (event) => {
        this.setState({ newComment: event.target.value });
    }

    addNewComment = () => {
        const { postIndex } = this.props;
        const postComments = localStorage.getItem(`posts${postIndex}`).comments;
        const username = "New User";
        const text = this.state.newComment;
        localStorage.setItem(`posts${postIndex}`, [
            ...postComments,
            { username, text }
        ]);
        this.setState({
            comments: [...this.state.comments, { username, text }],
            newComment: '',
        });
    };

    likePost = () => {
        let liked = this.state.liked;
        if (liked === false) {
            this.setState({ likes: this.state.likes + 1});
            document.getElementById('like-icon').src='https://melbournechapter.net/images/instagram-clipart-instagram-heart-3.png';
            this.setState({ liked: true });
        }
        else if (liked === true) {
            this.setState({ likes: this.state.likes - 1 });
            document.getElementById('like-icon').src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg';
            this.setState({ liked: false });
        }
    };

    
    render() {
        return (
            <div>
                <div className='interactive-action-buttons'>
                    <img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' onClick ={this.likePost} id='like-icon' />
                    <img src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
                </div>

                <div className='likes'>
                    <p>{this.state.likes} likes</p>
                </div>
                {this.state.comments.map((comment) => <CommentSection comment={comment} />)}
                
                <div className='post-time'>
                    <p>{this.state.timestamp}</p>
                </div>

                <div className='comment-bar'>
                    <form onSubmit={this.addNewComment}>
                        <input type='text' placeholder='Add a comment' />
                        <button>&#8230;</button>
                    </form>
                </div>
            </div>
        )
    }
}


// const CommentMap = props => {
    //     const addNewComment = (event, id, comment) => {
        //         event.preventDefault();
        //     }
        
        //     return (
            //         <div>
            // 			<div className='interactive-action-buttons'>
            // 				<img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' />
            // 				<img src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
            // 			</div>
            
            // 			<div className='likes'>
            // 				<p>{props.userData.likes} likes</p>
// 			</div>
//             {props.comments.map((comment) => <CommentSection comment={comment} />)}
            
//             <div className='post-time'>
//                 <p>{props.userData.timestamp}</p>
//             </div>

//             <div className='comment-bar'>
//                 <form onSubmit={addNewComment}>
//                     <input type='text' placeholder='Add a comment' />
//                     <button>&#8230;</button>
//                 </form>
//             </div>
//         </div>
//     )
// }


CommentMap.proptypes = {
    comment: PropTypes.object.isRequired,
}

export default CommentMap;