import React from 'react';
import './Comments.css'

const Comments = (props) => {
    console.log('comments', props.comments);
    return (
        <div className="Comments">
            <div> {props.comments.length === 0 ? (
                <p>"no props yet"</p>
                    ) : (
                    <div>
                        {props.comments.map((comment, i) => {
                            return (
                                <div key={i}>
                                    <div>{`${comment.username} says ${comment.text}`}</div>
                                    {/*<div>{comment.text}</div>*/}
                                </div>
                            )
                        })}
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Comments;

