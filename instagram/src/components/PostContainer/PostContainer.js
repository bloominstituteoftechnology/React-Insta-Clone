import React from 'react'; 
import './PostContainer.css';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {likes: this.props.likes, cmdCalled: false}
    }

    componentDidMount (){
        this.setState({cmdCalled:true});
    }

    handleLikeClick = () => {
        this.setState({likes: this.state.likes + 1}); 
    }


    render() {

        let likes;
        this.state.cmdCalled ? likes = this.state.likes : likes = 0; 
        return(
            <div className = "posting">
                <div className = "postHeader">
                <img className ="thumbNail" src={this.props.thumbNail} alt="" />
                <div className ="postUserName">{this.props.userName}</div>
                </div>
                <img className ="postImage" src={this.props.image} alt="" />
               <div className = "postIcons">
               <i className="far fa-heart" onClick = {this.handleLikeClick}></i> <i className="far fa-comment"></i>
               </div>
               <h3 className = "likes" >{likes} likes </h3>
            </div>

        );
    }

}



PostContainer.propTypes = {
    userName: PropTypes.string,
    thumbNail: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number
}


export default PostContainer; 