import React from 'react';
import '../CommentSection/CommentSection.css'
import speechbub from './speechbub.png';
import instaheart from './instaheart.png';
import propTypes from 'prop-types';

/* function CommentSection(props) {
    return (
        <div className='comment-container'>
            <div className='comment-icons'>
                <div className='comment-heart'>
                    <img src={instaheart} alt='heart'/>
                </div>
                <div className='comment-bub'>
                    <img src={speechbub} alt='bubble'/>
                </div>
            </div>

            <p> <span> {props.data.likes} likes </span> </p>
            <p> 
                <span> {props.data.comments[0].username} </span>  {props.data.comments[0].text}
            </p>
            <p>
                <span> {props.data.comments[1].username} </span>{props.data.comments[1].text}
            </p>
            <p>
                <span> {props.data.comments[2].username} </span> {props.data.comments[2].text}
            </p>
            <p>
                {props.data.timestamp}
            </p>
            <div className='input'>
                <input placeholder='Add a comment...'/>
            </div>

        </div>

    );
}


export default CommentSection;
*/

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [...props.data.comments],
            likes: props.data.likes,
            timestamp: props.data.timestamp,
            addNewComment: props.addNewComment,
            newComm: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            newComm: e.target.value
        })
      };

    addNewComment = (e) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments,
                {text: this.state.newComm,
                    username: 'InstaDoggo'
                }],
                newComm: '',
            }) 
        };

    upLikes = e => {
        this.setState({
            likes: this.state.likes + 1
        })
    };

    render () {
        return (
            <div className='comment-container'>

                <div className='comment-icons'>
                    <div onClick={this.upLikes} className='comment-heart'>
                        <img src={instaheart} alt='heart'/>
                    </div>

                    <div className='comment-bub'>
                        <img src={speechbub} alt='bubble'/>
                    </div>
                 </div>

                <p> <span> {this.state.likes} likes </span> </p>

                {this.state.comments.map(comment => { 
                return (<p> <span>{comment.username}</span> {comment.text} </p>)})
                }

                <p> {this.state.timestamp} </p>

                <form onSubmit={this.addNewComment} className='input'>
                    <input 
                    placeholder='Add a comment...'
                    name='newComm'
                    value={this.state.newComm}
                    onChange={this.changeHandler}

                    />
                </form>

            </div>

        );
    }
}

export default CommentSection;


CommentSection.propTypes = {
    comments: propTypes.array,
    likes: propTypes.string,
    timestamp: propTypes.string,
    addNewComment: propTypes.func
  }
  