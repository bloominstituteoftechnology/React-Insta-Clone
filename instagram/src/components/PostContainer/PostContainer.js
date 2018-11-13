import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer ';


const PostContainer = (props) => {
    return (
        <div>
            <div className="PostHeader" >
                <img src={props.placeholderOnProp.thumnailUrl} alt="thumbnail Url"/> <h4>{props.placeholderOnProp.username}</h4>

            </div>

            <div className="Postimg" >
                <img alt="Post Image" className="LargePostImgs"
                    src={props.placeholderOnProp.imgUrl} />

            </div>
            <div>

                <h5>{`${props.placeholderOnProp.likes} likes `}</h5>
                <h5>{`${props.placeholderOnProp.timestamp}`}</h5>
                

            </div>





            <div className="PostedComments" >
                {/*<CommentSectionContainer commets= {props.InstaPosts.comments} />*/}

                {/*<p>{props.placeholderOnProp.comments.username}</p>
                <p>{props.placeholderOnProp.comments.text}</p>*/}
            </div>




            <div>
                <h5>{props.placeholderOnProp.timestamp}</h5>
            </div>
            <div className="AddCommentsDiv">
                
            </div>

        </div>

    );
}
export default PostContainer;
