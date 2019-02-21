import React from 'react'
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'


import './PostContainer.css'

import CommentSections from "./../Comments/CommentSections";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.data.likes,
            clicked:false
        }
    }

    addLike = () => {
        this.state.clicked === true ? 
            this.setState({likes:this.state.likes -1, clicked:false}) :
            this.setState({likes:this.state.likes + 1, clicked:true})
            
    };

    heartColorChange = () => {
        return this.state.clicked===true ? 'red': 'tan'
    }

    render() {
        return (
            <Container className='post'>
                <Row className='post-header'>
                    <img src={this.props.data.thumbnailUrl} alt='user-profile-thumbnail' className='thumbnail'/>
                    <span><strong>{this.props.data.username}</strong> </span>
                </Row>
                <Row className="posted-image">
                    <img src={this.props.data.imageUrl} alt='posted' onDoubleClick={this.addLike}/>
                </Row>
                <div className='user-interaction'>
                    <Row>
                        <FontAwesomeIcon className='icon' icon={faHeart} size='2x' color={this.heartColorChange()} onClick={this.addLike}/>
                        <FontAwesomeIcon className='icon' icon={faComment} size='2x' color='tan'/>
                    </Row>
                    <Row><strong>{this.state.likes} likes</strong></Row>
                    <CommentSections commentsData={this.props.data.comments} time={this.props.data.timestamp}/>
                </div>
            </Container>
        )
    }
}

Post.propTypes = {
    data: PropTypes.object
};


export default Post