import React from 'react';


class Likes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
        likes: props.likes
      }
    }
  
    addLike = () => {
        this.setState({
            likes: this.state.likes +1
        })
    }

  
  render() {
  
    return (
        <div>
            <div className='instaIcons'>
              <i id='icon' onClick={this.addLike} className="far fa-heart"></i>
              <i id='icon' className="far fa-comment"></i>
            </div>

            <div className='instaFooter'>
              <p className='likes'>{`${this.state.likes} likes`}</p>
            </div>
        </div>)
  }
  }
  
  
  export default Likes;
  