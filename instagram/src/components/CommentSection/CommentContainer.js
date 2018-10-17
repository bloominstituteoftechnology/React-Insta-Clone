import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';

class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data   
        }
    }

    render(){
        return(
            <div>
                {this.state.data.map(item => {
                    return <CommentSection comments={item.comments} />
                })}
            </div>
        )
    }
}

export default CommentContainer