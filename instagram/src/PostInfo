import React, {Component} from 'react';
import Comments from './Comments';
import './App.css';
import { Panel, Image } from 'react-bootstrap';

export default class PostInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            comments: []
        }
    }
    componentDidMount() {   
        this.setState({post: this.props.post}),
        this.setState({comments: this.props.post.comments})
    }
    render() {
        return (
            <Panel className = "postPanel">
                <div>
                    <Image className="thumbNail" src={this.state.post.thumbnailUrl} circle/>
                    <p className="username">{this.state.post.username}</p>
                    <img className="postImage" src={this.state.post.imageUrl}/>
                    <p className="timestamp">{this.state.post.timestamp}</p>
                    <div className="heart_icon"></div>
                    <div className="comment_icon"></div>
                    <p className="likes">{this.state.post.likes} Likes</p>
                    <div>
                        {this.state.comments.map((object, i) => {
                            return <Comments key={i} comment={object}/> 
                        })}
                    </div>
                </div>
            </Panel>
        )
    }
}