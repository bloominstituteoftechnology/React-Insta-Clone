import React, { Component } from 'react';
import Moment from 'react-moment'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
            likes: props.likes,
            timestamp: props.timestamp,
            newComment: ''
        };
    }

    // increase number of likes
    increaseLikes = (e) => this.setState({likes: this.state.likes + 1});

    handleChange = (e) => this.setState({newComment: e.target.value});

    addComment = (e) => {

    };
    render() {
        {let currentDate = Date()}
        return (
            <div className='Post'>
                <div className='Post__header'>
                    <img
                    className='Post__thumbnailURL'
                    src={this.props.thumbnailUrl}
                    alt='User Image'
                    />
                    <h1 className='Post__username'>
                        {this.props.username}
                    </h1>
                </div>
                <img
                 className='Post__image'
                 src={this.props.imageUrl}
                 alt='Poster Image'
                />
                <div className='Post__footer'>
                    <div className='Post__action-bar'>
                        <FontAwesomeIcon icon={faHeart} size='sm' onClick={this.increaseLikes} className='hear-icon'/>
                        <FontAwesomeIcon icon={faComment} size='sm'/>
                    </div>
                    <div className='Post__likes'>
                        {this.state.likes} likes
                        <CommentSection comments={this.state.comments}/>
                    </div>
                    <div className='Post__timesine'>
                        {console.log('Buster', this.state.timestamp)}
                        <Moment fromNow>{this.state.timestamp}</Moment>
                    </div>
                    <div className='Post__newcomment'>
                        <input
                         type='text'
                         value={this.state.newComment}
                         placeholder='Add a comment....'
                         onChange={this.handleChange}
                        />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

