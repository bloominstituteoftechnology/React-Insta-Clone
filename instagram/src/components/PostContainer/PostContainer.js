import React from 'react';
import { CommentSection } from '.././CommentSection/CommentSection';
import "./PostContainerStyle.css";
import heart from '../../assets/heart.png';
import speech from '../../assets/speech.png';
import banner from '../../assets/banner.png';
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardColumns, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export const PostContainer = (props) => {
    return (
        <div>
            {props.data.map(user => {
                return (
                    <div className='postContainer'>
                        <Card>
                            <CardTitle>
                                <div className='user'>
                                    <img className='thumbnail' key={user.username} src={user.thumbnailUrl} />
                                    <p className='username'>{user.username}</p>
                                </div>
                            </CardTitle>
                            <CardImg src={user.imageUrl} />
                            <div className='postNav'>
                                <div className='heartAndComment'>
                                    <img className="postheart" src={heart} alt='postheart'/>
                                    <img className="commenticon" src={speech} alt='commenticon' />
                                </div>
                                <div>
                                    <img className="banner" src={banner} alt='banner'/>
                                </div>
                            </div>
                            <CardText>
                                <p className='likes'><strong>{user.likes}</strong> likes</p>
                                <CommentSection comments={user.comments} />
                                <p className='timestamp'>{user.timestamp}</p>
                                <input className="addComment" placeholder="Add a comment..." />
                            </CardText>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
};