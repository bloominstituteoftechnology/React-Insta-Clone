import React, { Component } from 'react';


class PostContainer extends Component {
    constructor()  {
        super();
        this.state = {
            postImage: '',
            username: ''
        }; 
    };

    render() {
        return(
            this.props.feed.map(post => {
                return (
                    <div>
                        <div className={'row d-flex justify-content-start'}>
                            <div className={'col-1'}><img className={'thumbnail'} src={post.thumbnailUrl} alt='thumbnail'/></div>
                            <div className={'col d-flex align-items-center justify-content-start'}>{post.username}</div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}><img className={'postImg'} src={post.imageUrl} alt='PostImg' /></div>
                        </div>
                    </div>
                );
                
            })
        );
    }
};

export default PostContainer;