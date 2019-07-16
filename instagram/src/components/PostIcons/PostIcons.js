import React from 'react';
import './post-icons.css';
import heart from '../../img/heart.png';
import heartBlk from '../../img/heart-blk.png';




class PostIcons extends React.Component {
    constructor(props){
        super(props);
        this.state={
            source: { 
                one: {heart},
                two: {heartBlk}
            }

        }
       
    }

changeIconToBlk = (event) => {
    
        event.target.src = this.state.source.two.heartBlk;      
   
}
    
changeIconToWhite = (event) => {
    
         event.target.src = this.state.source.one.heart;      

}

updateLikes = () => {
    let likesContainer = document.getElementById(`likes${this.props.id}`);
    let currentLikes = likesContainer.textContent;
    let newLikes = parseInt(currentLikes) + 1;
    likesContainer.innerHTML = newLikes;

}


    
render(){


    return(

        <div className="icons">
                <ul className="icons-container">
                    <li>
                        <img 
                        id="heart-like-icon" 
                        className="heart-like-icon" 
                        src={this.state.source.one.heart} 
                        onMouseOver={this.changeIconToBlk}
                        onMouseLeave={this.changeIconToWhite }
                        onClick={this.updateLikes}
                         />
                   </li>
                   <li  id ={`likes${this.props.id}`} className="likes">
                       {this.props.likes}
                   </li>
                </ul>
        </div>


    )

}


}

export default PostIcons;