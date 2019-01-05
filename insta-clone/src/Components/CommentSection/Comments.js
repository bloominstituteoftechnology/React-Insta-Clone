import React, { Component } from 'react';
import NewComment from './NewComment';
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    
    render() {
        const { comments } = this.props;
        return (
            <div className="Comments">
                <div> {comments.length === 0 ? (
                    <p>"no props yet"</p>
                    ) : (
                        <div>
                            <div>{comments.map((comment, i) => {
                                return (
                                    <div key={i}>
                                    <div>{`${comment.username} says ${comment.text}`}</div>
                                    {/*<div>{comment.text}</div>*/}
                                    </div>
                                    )
                                })}
                            </div>
                            <NewComment commentList={comments}/>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}

export default Comments;

