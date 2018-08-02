import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';
import AddCommentBar from './addcommentbar.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments: props.comments,
            timestamp: props.timestamp,
            newComment: '',
            username:''
        }
    }
    componentDidMount(){
        const username=localStorage.getItem('username');
        this.setState({username:username});
    }
    addNewComment=(index)=>{
        const commentsCopy=this.state.comments.slice();
        commentsCopy[index]=({
            username: this.state.username,
            text: this.state.newComment
        });
        this.setState({comments: commentsCopy,newComment:''});
    }
    handleInputChange=(e)=>{
        this.setState({newComment:e.target.value});
    }
    dynamicDate=(date)=>{
        let dynamicDate=date;
        dynamicDate=date.split(' ');
        let newDate='';
        dynamicDate[1].split('').forEach(e=>{if (parseInt(e,10)>0){newDate+=e}});
        dynamicDate[1]=newDate;
        dynamicDate=new Date(dynamicDate.join(' '));
        return moment(dynamicDate).fromNow();
    }
    render() {
        return (
            <div>
                {this.state.comments.map((e,i)=><Comment data={e} key={i}/>)}
                <p className='time-stamp'>{this.dynamicDate(this.state.timestamp)}</p>
                <div className='rule'></div>
                <AddCommentBar value={this.state.newComment} inputHelper={this.handleInputChange} handleInputSubmit={this.addNewComment} length={this.state.comments.length}/>
            </div>
        )
    }
}
CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;