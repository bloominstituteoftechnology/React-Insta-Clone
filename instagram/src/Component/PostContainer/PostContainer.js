
import React from "react";
import heart from '../../images/Instagram-Heart.png';
import './PostContainer.css';
import PropTypes from 'prop-types';
import { CommentSection } from "../CommentSection/CommentSection"

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            likes: this.props.item.likes
        }
    }


    incrementLike = () => {
        
        this.setState(prevState => { likes: prevState.likes++ });
    };

    render() {
        return (
            <div>
                <div className="mainpart">
                
                    <img className="secondimg" src={this.props.item.thumbnailUrl} alt="this.props.item.username" />
                    <span className="username">{this.props.item.username} </span>
                </div>

                <img className="firstimg" src={this.props.item.imageUrl} alt="" />


                <div onClick={this.incrementLike}>
                    <img className="likepic" src={heart} alt="" />
                </div>
                <i className="far fa-comment"></i>



                <h1>{this.props.item.likes}<span>likes</span></h1>

                <CommentSection {...this.props} />
                <form className="footer">Add a Comment...</form>
            </div>
        )
    }

}

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default PostContainer




