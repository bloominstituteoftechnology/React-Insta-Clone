import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Input } from 'reactstrap';
import './PostContainer.css'; 

export default class PoistContainer extends Component {
    constructor(){
        super();
        this.state = {
            likes: 0,
        };
    }


    componentDidMount(){
        this.setState({
            likes: this.props.post.likes,
            
        });
    }

    likeIt = () => {
        let newLikes = this.state.likes;
        ++newLikes;
        this.setState({
        likes: newLikes,
       }); 
    };
    render () {
        return(
            <div className = 'container'>
                <Card>
                    <CardBody>
                        <div className ='post-header'>
                            <div>
                                <img className ='post-header-img' src={this.props.post.thumbnailUrl} alt={this.props.post.username} />
                            </div>

                          
                                <div className ='post-header-username'>
                                    {this.props.post.username}
                                </div>
                            
                        </div> {/* ################### thumbnail and username ####################3 */}
                    </CardBody>
                    
                    <div>
                        <CardImg src={this.props.post.imageUrl} alt={this.props.post.timestamp} />
                    </div> {/* ################### Post Image ################################## */}

                    <CardBody>
                        <div className = 'signs-container'>
                            <div className ='signs'>
                                <i onClick = {this.likeIt} className="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                            <div className ='signs'>
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            </div>
                        </div> {/* ################### Like and Comment Signs ################################## */}

                        <div>
                            {this.state.likes} likes
                        </div> {/* ################### Number of likes ######################################### */}
                        
                        <div className ='comments'>
                            {this.props.post.comments.map((comment, index)=><CommentSection key={index} comment={comment}/>)}
                        </div> {/* ################### Post Comments ############################################ */}

                        <div className = 'mb-4'>
                            {this.props.post.timestamp}
                        </div> {/* ################### Time Stamp ################################################ */}

                        <div>
                            <Input onChange ={this.updateComments} type="text" name="comment" value='' placeholder = 'Comment...' size = '60' />   
                        </div>
                    </CardBody>    
                </Card>
            </div>
        );
    }    
}