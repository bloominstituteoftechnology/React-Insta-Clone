import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            likes: this.props.post.likes,
            clicked: false
        }
    }

    likesHandler = () =>{
        if(this.state.clicked){
            this.setState({
                likes:this.state.likes -1,
                clicked: false
            });
        }else{
            this.setState({
                likes: this.state.likes + 1,
                clicked: true
            }); 
        }
    }

    render(){
        return(
            <div className='wholePost'>
                <div className='titleBar'>
                    <img src={this.props.post.thumbnailUrl} alt='' />
                    <span>{this.props.post.username}</span>   
                </div>
                <div className='image'>
                    <img src={this.props.post.imageUrl} alt=''/>    
                </div>
                <div className='comments'>
                    <div>
                        <i onClick={this.likesHandler} className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <p>{this.state.likes} likes</p>
                    <CommentSection comments={this.props.comments} timestamp={this.props.post.timestamp} />
                </div>
            </div>
        )
    }
}



export default PostContainer

