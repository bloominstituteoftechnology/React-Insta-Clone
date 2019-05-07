import React from 'react';

class LikesButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.likesProps
        }
    }

    handleClick = () => {
        this.setState(() => ({
          likes: this.state.likes + 1
        }));
      };

    render(){
    return (
    <div className="likescontainer">
        <i className="likeimg far fa-heart fa-lg" onClick={this.handleClick}></i>
        <p>{this.state.likes} Likes</p> 
    </div>
    )
    }
}

export default LikesButton;
