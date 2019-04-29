import React from 'react';


class PostContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment> 
                {this.props.user.map(user => (
                    <div key={user.username}>
                    {user.username}
                    </div> 
                ))}
                {this.props.comments.map((e, i) => (
                <div key={i}>
                {e.comments}
                </div>
            ))}
            </React.Fragment>
        )
    }
}

export default PostContainer;