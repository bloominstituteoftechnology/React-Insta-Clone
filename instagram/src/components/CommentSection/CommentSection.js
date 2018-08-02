import React, {Component} from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {comments:props.com  }
    }
    render() { 
        return ( 
            <div>
        {this.state.comments.map(item=> <Comment com={item}/>)}
        </div>
         );
    }
}
 
export default CommentSection;
