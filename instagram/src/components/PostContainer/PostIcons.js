import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



 class PostIcons extends React.Component  {
     constructor(props){
         super(props);

         this.state = {
             likes: 0,
             counter: 1
         }
     }
     componentDidMount(){
         this.setState({likes: this.props.likes});
     }

     updateLikes = (event) => {
         this.setState({
             likes: this.state.likes + this.state.counter
         })
     }

     render(){
  return (
    <section className='icon-container'>
        <section className='post-icons'>
          <FontAwesomeIcon icon='heart' onClick={this.updateLikes}/>
          <FontAwesomeIcon icon='comment-alt' />
        </section>
        <section className='post-likes'>
        {this.state.likes} <span>likes</span>
        </section>
    </section>
  );
}
 }
 export default PostIcons;