import React from 'react';
import CommentsInput from './commentsinput';
import PropTypes from 'prop-types';
import Comments from './comments';





/*function CommentsSection(props){
    console.log(props);
    return(
       
      <div className='user-comments'>
      {props.comments.map((a, b) => <Comments key={b} comment={a} />)}
      <div className='border'></div>
      <CommentsInput />
    </div>
            
           
         )}

        
    



export default CommentsSection;*/


//refactor
export default class CommentsSection extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      comments: props.comments,
      comment:""
    }
  }

commentHandler=e=>{
  this.setState({comment:e.target.value})
}

addComment=e=>{
  e.preventDefault();
  let newComment = { username:'jaclyn_m_',text: this.state.comment }
  this.setState({
    comments: [...this.state.comments,newComment], comment:''
})

}


render(){
  return(<div className='user-comments'>
  {this.state.comments.map((a, b) => <Comments key={b} comment={a} />)}
  <div className='border'></div>
  <CommentsInput comment={this.state.comment} submitComment={this.addComment} changeComment={this.commentHandler}/>
</div>

  )
   

}

}
CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


