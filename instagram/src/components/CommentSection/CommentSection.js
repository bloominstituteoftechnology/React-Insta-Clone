import React, {Component} from 'react';
import dummyData from '../../dummy-data';
class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }
    componentDidMount() {
       this.setState({comments: this.props.comments});
    }
    render() {
        return (
            <div>
                <input></input>
            </div>
        )
    }
}
export default CommentSection;