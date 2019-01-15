import React, {Component} from 'react';


class ActionHeader extends Component {
    constructor(props){
    super(props);
    this.state ={
        totalLikes: props.likes,
        likeCount: 0
    }
 }

addLike = ev => {
    if(this.state.likeCount < 1) {
        this.setState(prevState =>({totalLikes: ++prevState.totalLikes}));
        this.setState(prevState =>({likeCount: ++prevState.likeCount}));
        ev.target.classList.remove('far');
        ev.target.classList.add('fas');
        ev.target.classList.add('red');
       
    }
    else if( this.state.likeCount === 1){
        this.setState(prevState =>({totalLikes: --prevState.totalLikes}));
        this.setState(prevState =>({likeCount: --prevState.likeCount}));
        ev.target.classList.add('far');
        ev.target.classList.remove('fas');
        ev.target.classList.remove('red');
    }
}

render(){
    return(
        <div>
        <div className="d-flex action-btns">
              <i onClick={this.addLike} className="far fa-heart"/>
              <i className="far fa-comment"/> 
        </div>
        <p className="font-weight-bold">{this.state.totalLikes} likes</p>
        </div>
    )
}
}

export default ActionHeader;