import React, {Component} from 'react';
import './App.css';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: {}
        }
    }
    componentDidMount(){
        this.setState({comments: this.props.comment})
    }
    render() {
        return (
            <div>
                <p><span className="commentUser">{this.state.comments.username}:</span> {this.state.comments.text}</p>
            </div>
        )
    }
}