import React from 'react';
import PropTypes from 'prop-types';
import UserName from '../PostContainer/UserName';
import DeleteButton from './DeleteButton';
import CommentText from './CommentText'

 class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state={
     comments:[]
    }
  }
  componentDidMount(){
     this.setState({ comments: this.props.data },()=>{});
  }
  componentDidUpdate(prevProps){
    if (this.props.data !== prevProps.data) {
    this.setState({ comments: this.props.data },()=>{});
    }
 }
  addComment(){
    console.log('success')
  }
  render(){
   return(
    <div className ='commentBox'>
        { this.state.comments.map((e,i) =>{
          return (<div key={i} className='comment'>
         <UserName> {e.username}</UserName>
          <CommentText className='userComment'>{e.text}</CommentText>
          <DeleteButton onClick={this.props.methods} > ␡ </DeleteButton>
          </div>)
        })}
    </div> 
  )
}
 }
CommentSection.propTypes = {
   data: PropTypes.array.isRequired
}

export default CommentSection;