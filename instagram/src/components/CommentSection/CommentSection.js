import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            comment: '',
        };
    }
    componentDidMount() {
        this.setState({ user: this.props.item.username, comment: this.props.item.text});
        console.log(this.state.user);
            }
    render() {
        return (
            <div>
                <div>Comments Section here</div>
            </div>
        );
    }
}

export default CommentSection;