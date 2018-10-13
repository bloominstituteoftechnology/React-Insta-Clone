import React, { Component } from 'react';
// import Button  from 'reactstrap/lib/Button';
import "./Post.css";
import CommentSection from '../CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       likes: this.props.likes,
       input: '',
       comments: [],
       user: ''
     };


  //       let newcomms =  this.state.value.map(comm => <div> <strong>{comm.value}</strong> <p>{comm.value}</p></div>)
  // console.log( 'comm', newcomms);

     this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
    let caption = this.props.caption;
  }
  addsOne = () => {
    this.setState(prevState => {
      return { likes: prevState.likes + 1 };
    });
  };

  handleChange(event) {
     this.setState({input: event.target});
       console.log( 'input', this.state.input.value);
   }
  //
   handleSubmit(event) {
     const newContent = this.state.comments;
     const addcomment = this.state.input.value;
  newContent.push({user: "Pascale", text: addcomment})

     alert('A name was submitted: ' + addcomment);
     event.preventDefault();
   }



  render() {
    const nickname = this.props.username;
    const avatar = this.props.avatar;
    const image = this.props.image;;
    const comments = this.state.comments;
    const caption = this.props.caption;
    const time = this.props.time;

    let newtext =  comments.map(text => <div> <strong>{text.user}</strong> <p>{text.text}</p></div>)
      console.log("comments: ", newtext);



    return <article className="Post" ref="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={avatar} alt={nickname}/>
          </div>
          <div className="Post-user-nickname">
            <span>{nickname}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt={image} src={image}/>
        </div>
      </div>
      <div className="Post-caption">
          <div><i onClick={this.addsOne} class="far fa-heart fa-lg"></i>   <i class="far fa-comment fa-lg"></i></div>
        <strong> {this.state.likes} likes </strong>

        <CommentSection caption={caption} time={time}/>
          {newtext}

        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" value={this.state.input.value} onChange={this.handleChange} />   <Button  type="primary"> Comment </Button>
</label>

        </form>

      </div>
    </article>;

  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.array
};

export default PostContainer;
