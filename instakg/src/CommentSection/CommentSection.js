import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

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
  addComment(){
    console.log('success')
  }
  render(){
   return(
    <div className ='commentBox'>
        { this.state.comments.map((e,i) =>{
          return (<div key={i} className='comment'>
         <span className='userName'> {e.username}</span>
          <span className='userComment'>{e.text}</span>
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