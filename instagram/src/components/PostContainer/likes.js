import React from 'react';
import './likes.css';
import dummyData from '../../dummy-data';
import * as Icon from 'react-feather';



class Likes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: props.item.likes,
        show:true
       
      };
    }
  
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }

    render() {
        return (
            <div className = 'likeSection'>
                <Icon.Heart onClick={this.IncrementItem}/><Icon.MessageCircle/>
                <p className = 'likeCount'>{ this.state.show ? <p>{ this.state.clicks } likes</p> : '' }</p>
            
            </div>            
        )   
    }
}
        



export default Likes;






       