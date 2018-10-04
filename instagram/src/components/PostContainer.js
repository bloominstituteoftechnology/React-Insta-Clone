import React from 'react';


class PostContainer extends React.Component{
    render(props){
        
        return(
            <div>
                {this.props.username}
            </div>
        )
    }
} 

export default PostContainer;