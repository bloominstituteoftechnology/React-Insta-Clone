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
            <img src={this.props.propsInPC.thumbnailUrl}></img>
            {this.props.propsInPC.username}
            <img src={this.props.propsInPC.imageUrl}></img>
                {this.props.propsInPC.likes}
                {<CommentSection commentSection={this.props.propsInPC.comments}/> }
            </div>
        
        )
    }  
}



export default PostContainer;