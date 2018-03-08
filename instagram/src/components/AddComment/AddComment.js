import React, { Component } from 'react';

class AddComment extends Component {
    constructor() {
        super();

        this.state = {
            newComment: '',
        }
    }

    handleNewComment(event) {
        event.preventDefault();
        this.setState({newComment: event.target.value });
    }

    render() {
        return(
            <div className={'row'}>
                <div className={'col'}>
                    <form onSubmit={this.props.add(this.state.newComment)}>
                        <input onChange={this.handleNewComment} placeholder='Comment Here!' value={this.state.newComment} />
                    </form>
                </div>
            </div>
        );
    };

};

export default AddComment;