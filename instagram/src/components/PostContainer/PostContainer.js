import React from 'react';
import CommentSection from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            commentSection: props.propsInPC.comments,
        }
    }
    
    render() {
        return (
            
            <div className="what"> 
                {this.props.propsInPC.likes}
                {this.state.commentSection.map(comments => <CommentSection commentSection={this.state.commentSection}/> )}

            </div>
        )
    }  
}



export default PostContainer;