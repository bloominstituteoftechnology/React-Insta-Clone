import React from "react"
import "./head.css"
import PropTypes from 'prop-types';
import Comment from "./Comment";
const PostContainer = (props)=>{
        
    return (
        
        <div  >
                <div className="compo-image img">
                {props.data.map(data=>
                    
                    <div key={new Date()}>

                        <div className="picture">
                            <h4>{data.username}</h4>
                            <div>
                                <img className="thumb"  src={data.thumbnailUrl} alt="tumbnail"/>
                            </div>
                        </div>
                        <img className="imageurl"src={data.imageUrl} alt="rdm" />
                        <h6>{data.likes} Likes</h6>
                        <Comment comments={data.comments} />
                        <h6>{data.timestamp}</h6>

                        
                    </div>
                )}
                </div>

            <div>
                    
            </div>

        </div>

    )
}




export default PostContainer



PostContainer.propTypes = {
    data : PropTypes.array,
    username :PropTypes.string,
    timestamp :PropTypes.string.isRequired,
    likes:PropTypes.number,
}