import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import AddCommentBar from './AddCommentBar.js';
import moment from 'moment';
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
            newComment: '',
            username:''
        }
    }

    componentDidMount(){
        const username=localStorage.getItem('username');
        this.setState({username:username});
        let comments=localStorage.getItem('Comments');
        if (comments) {
            this.setState({comments:JSON.parse(comments)});
        }
    }

    addNewComment=(index)=>{
        const commentsCopy=this.state.comments.slice();
        commentsCopy[index]=({
            username: this.state.username,
            text: this.state.newComment
        });
        this.setState({comments: commentsCopy,newComment:''},localStorage.setItem('Comments',JSON.stringify(commentsCopy)));
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
                <Timestamp>{this.dynamicDate(this.state.timestamp)}</Timestamp>
                <Rule/>
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