import React, { Component } from 'react';

class CommentContainer extends Component {
    render() {
        return (
            <div>
                {this.props.dummyData.map((data) => {
                    return (
                        <div>
                            {(typeof (data.comments) === 'object') ?
                                <div>{
                                    data.comments.map((newData  ) => {
                                        return (
                                            <>
                                            <h4>{newData.username}</h4>
                                                <p>{newData.text}</p>
                                            </>
                                        )
                                    })
                                }</div> : null
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CommentContainer;
