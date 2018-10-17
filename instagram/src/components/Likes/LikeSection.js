import React from 'react';
import PropTypes from 'prop-types';
import Likes from './likes';


class LikeSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }

    addLike = () => {
        this.setState((prevState) =>({
            likes: prevState.likes + 1
        }));
    }

    render(){
        return(
            <div className="post-container">
                <Likes likes={this.state.likes} addLike={this.addLike}/>
            </div>
        )
    }
}

export default LikeSection;


LikeSection.propTypes = {

    likes: PropTypes.number
}