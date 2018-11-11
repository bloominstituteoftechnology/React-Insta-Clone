import React from 'react';
// import CommentSection from './';


PostContainer = (props) => {
    return (
        <div>
            <section className="PostHeader" >
                {props.placeholder.thumnailUrl} {props.placeholder.username}

            </section>

            <div className="Postimg" >
                {props.placeholder.imgUrl}

            </div>
            <div>

                {props.placeholder.likes}

            </div>
            <div className="PostedComments" >

                {props.placeholder.comments}
            </div>
            <div className="AddCommentsDiv">
                
            </div>
        
        
        
        
        </div>






    );
}
export default PostContainer;
