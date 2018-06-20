import React from 'react';
import './Likes.css';
import heart from '../../images/heart.png';
import talk from '../../images/talk.png';


class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.like,   
        }      
    }
    addLike = e => {
        e.preventDefault();
        let likes = this.state.likes;
        likes = (likes + 1);
        this.setState({likes});
    }

render(){
    return (
        <div>
            <div className= "icons">
               <img onClick = {this.addLike} className ="heart" src = {heart} alt = "heart thumbnail"/>
               <img className ="talk" src = {talk} alt = "talk thumbnail" />
           </div>
           <div className ="likes">
               {this.state.likes} likes
           </div>
        </div>
    )
}
}

export default Likes;