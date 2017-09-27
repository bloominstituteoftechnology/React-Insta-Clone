import React, {Component} from 'react';
import {Comment} from './Comment';
export default class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {Comments: []};
    }
    componentDidMount(){
        this.setState({
            Comments: this.props.comments
        });
    }
    render(){
        return(
            <div className="comment_section">
            <Comment comments={this.state.Comments} />
            </div>
        );
    }
}