import React from '../../node_modules/react';
import './css/CommentSection.css';
// import PropTypes from '../../node_modules/prop-types';


class CommentSection extends React.Component {
  constructor(props){
    super();
    this.state = {
      comments: props.comments
    };
  }

  render(){
    return (
      <div>
        <commenter>{this.state.comments.username}</commenter> <comment>{this.state.comments.text}</comment> 
      </div>
    );
  }

}

// = props => {


//     return (
  
//       <div>
//       <commenter>{props.comments.username}</commenter> <comment>{props.comments.text}</comment> 
      
//       </div>
//     )
//   };


// CommentSection.propTypes = {
//   username: PropTypes.string,
//   comments: PropTypes.string
// }

export default CommentSection;