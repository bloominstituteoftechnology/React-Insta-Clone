import React, { Component } from 'react';
import LikeButt from '../../img/like.png';
import './searchbar.css';

class LikeButton extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts : [],
        count: 0
      }
    }

    render(){
        return (
            <div>
                <img className="Like-Button" alt="''" src= {LikeButt} />
            </div>
    )
}
}

export default LikeButton;