import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import moment from 'moment'

import heart from '../../img/insta-heart.png';
import liked from '../../img/insta-heart-liked.png';
import reply from '../../img/insta-reply.PNG';
import comment from '../../img/insta-comment.PNG';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      likes: props.likes,
      clicked: false,
      comments: props.comments,
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  addComment = event => {

    if(event.key === 'Enter'){
      const newComments = this.state.comments.slice();
      const newValue = event.target.value;

      newComments.push({username: 'Anonymous', text: newValue});

      localStorage.setItem(`${this.state.time}-comment`, JSON.stringify(newComments));
      this.setState({comments: newComments});
      event.target.value = ''
    }
  }

  likePost = event => {
    let count = this.state.likes;

    if(!this.state.clicked) {
      count++
    } else {
      count--
    }

    this.setState({
      likes: count,
      clicked: !this.state.clicked
    });
  }

  removePost = event => {
    const newComments = this.state.comments.slice()
    let currentComment = event.target.parentElement.innerText;
    const arr = currentComment.split(' ')

    const user = arr.shift();
    arr.pop();

    currentComment = arr.join(' ')

    for(let i = 0; i < newComments.length; i++) {
      if(newComments[i].username === user && newComments[i].text === currentComment) {
        newComments.splice(i, 1);
      }
    }

    localStorage.setItem(`${this.state.time}-comment`, JSON.stringify(newComments));
    this.setState({comments: newComments});
  }

  toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }

  componentDidMount() {
    if(!localStorage.getItem(`${this.state.time}-comment`)) {
      return;
    }

    const comment = localStorage.getItem(`${this.state.time}-comment`);
    const loadUpdate = JSON.parse(comment)

    this.setState({
      comments: loadUpdate,
    })
  }

  render() {

    const comments = this.state.comments.map(comment => <Comment key={Math.random()}
                                                                 user={comment.username}
                                                                 text={comment.text}
                                                                 deleteHandler={this.removePost}/>)


    const splitDate = this.state.time.split(' ');
    const year = splitDate[2].substring(0, splitDate[2].length-1);
    const month = splitDate[0];
    const day = splitDate[1].substring(0,2);

    const postMoment = moment(`${year}-${month}-${day}`);

    let likedIcon;

    if(this.state.clicked) {
      likedIcon = liked;
    } else {
      likedIcon = heart;
    }

    return(
      <div className="post__comments">

        <div  className="post__comments__interaction">
          <img src={likedIcon} onClick={this.likePost} alt="insta-heart" />
          <img src={reply} alt="insta-reply" />
          <p>{this.state.likes} likes</p>
        </div>

        {comments}

        <p className="post__comments__time">{postMoment.from(moment())}</p>

        <div className="post__comments__add">
          <input type="text" placeholder="Add Comment..." onKeyPress={this.addComment}/>


          <div className='modal-container'>
            <Button color="danger" onClick={this.toggle}><img src={comment} alt="insta-comment" /></Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Report inappropriate</ModalHeader>
              <ModalHeader>Unfollow</ModalHeader>
              <ModalHeader>Go To Post</ModalHeader>
              <ModalHeader>Embed</ModalHeader>
              <ModalHeader>Share</ModalHeader>
              <ModalHeader>Copy Link</ModalHeader>
              <ModalHeader>Cancel</ModalHeader>
            </Modal>
          </div>

        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  likes: PropTypes.number,
  time: PropTypes.string,
}

export default CommentSection;
