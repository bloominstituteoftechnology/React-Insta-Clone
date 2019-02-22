import React from "react"
import "./head.css"
import PropTypes from 'prop-types';
import Comment from "./Comment";
const PostContainer = (props)=>{
    return (
        
        <div>
                <div className="compo-image img">
                {props.data.map(data=>
                    
                    <div key={new Date()}>

                        <div className="picture">
                            <h5>{data.username}</h5>
                            <div>
                                <img className="thumb"  src={data.thumbnailUrl} alt="tumbnail"/>
                            </div>
                        </div>
                        <img className="imageurl"src={data.imageUrl} alt={data.username} />
                        <h6 >{props.countLikes} </h6>
                        <Comment  comments={data.comments}
                                 likes={data.likes}
                                 />
                    
                        <h6 className="date">{data.timestamp}</h6>

                    </div>
                )}
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