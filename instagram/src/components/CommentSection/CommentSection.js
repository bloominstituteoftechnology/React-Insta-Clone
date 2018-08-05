import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import moment from 'moment';
import AddCommentBar from './addcommentbar.js';
import styled from 'styled-components';

const Timestamp=styled.p`
    text-align: left;
    margin-left: 3%;
    color: #9fabb7;
    font-size: 12px;
`
const Rule=styled.div`
    border: 1px solid #f5f5f5;
    width: 95%;
    margin: 0 auto;
`
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments: props.comments,
            timestamp: props.timestamp,
            index: props.index,
            newComment: '',
            username:''
        }
    }
    componentDidMount(){
        const username=localStorage.getItem('username');
        this.setState({username:username});
    }
    addNewComment=(index)=>{
        let comments=JSON.parse(localStorage.getItem('posts'));
        comments[index].comments.push({
                    username: this.state.username,
                    text: this.state.newComment
                });
        return this.setState({newComment:'',comments:comments[index].comments},()=>localStorage.setItem('posts',JSON.stringify(comments)));
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
    deleteComment=(postIndex,commentIndex)=>{
        let comments=JSON.parse(localStorage.getItem('posts'));
        comments[postIndex].comments.splice(commentIndex,1);
        return this.setState({comments:comments[postIndex].comments},()=>localStorage.setItem('posts',JSON.stringify(comments)));
    }    
    render() {
        return (
            <div>
                {this.state.comments.map((e,i)=><Comment index={this.state.index} data={e} username={this.state.username} itemNumber={i} key={i} commentDelete={this.deleteComment}/>)}
                <Timestamp>{this.dynamicDate(this.state.timestamp)}</Timestamp>
                <Rule/>
                <AddCommentBar index={this.state.index} value={this.state.newComment} inputHelper={this.handleInputChange} handleInputSubmit={this.addNewComment} length={this.state.comments.length}/>
            </div>
        )
    }
}
CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;