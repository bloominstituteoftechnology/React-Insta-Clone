import React from 'react';
// import CommentContainer from './../CommentSection/CommentContainer';
import './post.css';


class PostContent extends React.Component {

    render() {

        return(
            <div key={this.props.timestamp}>
                {this.props.dummyData.map(postProps => {
                    return (
                        <>
                            <div className={"postHeader"}>
                            <img className={"profileThumbImg"} src={postProps.thumbnailUrl} alt={"profile pic"}/>
                            <h4>{postProps.username}</h4>
                            </div>
                            <div className={"contentImgWrap"}>
                            <img className={"imgContent"} src={postProps.imageUrl} alt={"instagramImg"} />
                            </div>
                            <div className="likes">
                                <h3>{postProps.likes}{" likes"}</h3>
                            </div>
                            <div>
                            {(typeof (postProps.comments) === 'object') ?
                                <div>{
                                    postProps.comments.map((newData) => {
                                        return (
                                            <div className={"commentWrap"} key={postProps.username.toString()}>
                                            <h4>{newData.username}</h4>
                                                <p className={"comment"}>{newData.text}</p>
                                            </div>
                                        )
                                    })
                                    }</div> : null
                            }
                        </div>
               
                    </>
                    )
                })}
            </div>
        )
    }



}


export default PostContent;