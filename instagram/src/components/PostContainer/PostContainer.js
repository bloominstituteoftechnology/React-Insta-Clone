import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import PropTypes  from "prop-types";
import "./PostContainer.css"

const PostContainer =props=>{

    return (
        <div >
            <section className="first">
                <img src={props.data.thumbnailUrl}/>
                <p><strong>{props.data.username}</strong> </p>
            </section>
            <img src={props.data.imageUrl} />
            <p><strong>{props.data.likes} likes</strong></p>
            <CommentSection comments={props.data.comments}/>

       </div>
     );

}

PostContainer.propTypes={

    data:PropTypes.shape({
    username:PropTypes.string.isRequired,
    likes:PropTypes.number,
    comments:PropTypes.arrayOf(PropTypes.string),



    })
}
export default PostContainer