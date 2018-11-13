import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';



class PostContainer extends Component {

    constructor(){
        super();
        this.state={
            data: {}
        }
        
      }

      componentDidMount(){
        this.setState({ data: this.props.data})
      }

      addNewLike = ev =>{
          let tempData = this.state.data;
          tempData.likes++
          this.setState({
              data: tempData
          })
         
      }

    render(){
        return(
        <div className='post' >
            <Post data={this.state.data} addLike={this.addNewLike}/>
            <CommentSection comments={this.props.data.comments}/>
        </div>
    );
    }
    
}

export default PostContainer;