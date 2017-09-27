import React, {Component} from 'react';
//import LikeBtn from './assets/ig-like-btn.png';
//import CommentBtn from './assets/ig-comment-btn.png';

export default class LikeControls extends Component{
    constructor(props){
        super(props);
        this.state = {Likes:[], Comments:0}
        this.user = window.localStorage.getItem('userId');

        // Check If User Like The Post
        if(this.props.likeCount.includes(this.user)){
            this.heart = <img className='heart_button' onClick={this.removeLike} src={'./assets/ig-unlike-btn.png'}/>;
        } else {
            this.heart = <img className='heart_button' onClick={this.addLike} src={'./assets/ig-like-btn.png'}/>;
        }
        
    }
    componentDidMount(){
        
        this.setState({
            Likes: this.props.likeCount,
            Comments: this.props.commentCount
        });
        
    }
    addLike = () => {
        this.setState((props)=>{
            props.Likes.push(this.user);
        });
        this.heart = <img className='heart_button' onClick={this.removeLike} src={'./assets/ig-unlike-btn.png'}/>;
    };
    removeLike = () => {
        
                this.setState((props) => {
                    props.Likes.splice(props.Likes.indexOf(this.user),1);
                    this.heart = <img className='heart_button' onClick={this.addLike} src={'./assets/ig-like-btn.png'}/>;
                });
        
    };
    

    render(){
        return(
            
            <div className="like_controls">
                <hr/>
                {this.heart}
                <span >{this.state.Likes.length}</span>
                <img className="comment_button" src={'./assets/ig-comment-btn.png'}/>
                <span >{this.state.Comments}</span>
                <hr/>
            </div>
        );
    }
}