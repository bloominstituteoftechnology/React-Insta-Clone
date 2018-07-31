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
  render(){
   return(
    <div className ='commentBox'>
    {console.log(this.state.comments)}
        { this.state.comments.map((e) =>{
          return (<div className='comment'>
         <span className='userName'> {e.username}</span>
          <span className='userComment'>{e.text}</span>
          </div>)
        })}
    {/* <span className='userName'> {props.data.username}</span>
    <span className='userComment'>{props.data.text}</span> */}
    </div> 
  )
}
 }
// CommentSection.propTypes = {
//    data: PropTypes.shape({
//        username:PropTypes.string.isRequired,
//        text:PropTypes.string.isRequired,
//    })
// }

export default CommentSection;