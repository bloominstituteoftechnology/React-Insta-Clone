import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import {FormGroup, Grid, Row, Col, Image } from 'react-bootstrap';

class PostContainer extends React.Component {
    cont = 0;
    state = {users:this.props, comment:''};
    newCom = '';

    handleInputChange = event => {
        this.newCom = event.target.value;
        this.setState({ comment: event.target.value });
    };

    addComment = (event) => {
        event.preventDefault();

        const singleComment = {
            username:'germancin',
            text:this.state.comment,
        }

        const newUser = {
            comments: [...this.state.users.user.comments, singleComment],
            imageUrl: this.state.users.user.imageUrl,
            thumbnailUrl: this.state.users.user.thumbnailUrl,
            timestamp: this.state.users.user.timestamp,
            username: this.state.users.user.username,
        };

        const newUsers = [...this.state.users, newUser];

        this.setState({users:{user:newUsers[0]}});
        this.setState({comment:''});
    };

    render() {
        return (
            <div>
                <Grid className="box">
                    <Row>
                        <Col md={6} className="box-title">
                           <Image src={this.state.users.user.thumbnailUrl} alt={this.state.users.user.username} className="img-thumb" />  {this.state.users.user.username}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="box-image">
                            <Image src={this.state.users.user.imageUrl} alt={this.state.users.user.username} className="main-image" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="box-commnets">
                            <div className="box-commnets-like">{this.state.users.user.likes} likes </div>
                            {this.state.users.user.comments.map(sComment => {
                                this.cont++;
                                return (
                                    <CommentSection key={this.cont} comment={sComment} />
                                );
                            })}
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="box-add-comment">
                            <form onSubmit={this.addComment}>
                                <FormGroup>
                                    <input className="add-comment" onChange={this.handleInputChange} 
                                                                    value={this.state.comment}
                                                                    type="text" 
                                                                    placeholder="Add Comment..." />
                                   
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>
                <br/><br/>
            </div>
        )
    }
}

export default PostContainer;
