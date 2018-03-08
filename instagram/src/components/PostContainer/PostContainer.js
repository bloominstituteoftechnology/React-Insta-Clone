import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection';

export default class PoistContainer extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render () {
        console.log(this.props.post)
        return(
            <div>
                <div>
                    <img src={this.props.post.thumbnailUrl} alt={this.props.post.timestamp} />
                </div>
                <div>
                    {this.props.post.username}
                </div>
                <div>
                    <img src={this.props.post.imageUrl} alt={this.props.post.timestamp} />
                </div>
                <div>
                    heart comment
                </div>
                <div>
                    {this.props.post.likes} likes
                </div>
                <div>
                    {this.props.post.timestamp}
                </div>
                <div>
                    <h3>comments</h3>
                    {this.props.post.comments.map((comment, index)=><CommentSection key={index} comment={comment}/>)}
                </div>
                <div>
                    <textarea placeholder="add a comment" cols="100" />    
                </div>
            </div>
        );
    }    
}