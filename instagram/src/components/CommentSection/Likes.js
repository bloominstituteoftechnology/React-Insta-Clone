import React from 'react';
import './comment.css';
// import dummyData from '../../dummy-data';

class Likes extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            clicks: props.like,
            showLike: true
        })
    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    }

    toggleIt = () => {
        this.setState({ showLike: !this.state.showLike})
    }

    render () {
//  console.log(this.state.clicks)
 console.log("likes", this.props.like)
        return (
        <div>
        <div className="heartContainer">
            <div className="heart" onClick={this.IncrementItem}></div>
            <div className="clicks">{this.state.showLike} {this.state.clicks} likes</div>  
        </div>
        </div> 
        )
    }
}


export default Likes;