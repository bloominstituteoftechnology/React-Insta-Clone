import React from 'react';
import CommentSubComponent from './CommentSubComponent/CommentSubComponent'

class CommentSection extends React.Component
{
  constructor( props )
  {
    super( props );
    this.state = 
    {
      comments: props.comments,
      userName: "UserName",
      inputValue: "",
      submitValue: ""
    }
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }
  handleChange( event )
  {
    this.setState({
      inputValue: event.target.value
    })
  }
  handleSubmit( event )
  {
    event.preventDefault();
    let obj = { username: this.state.userName, text: this.state.inputValue };
    this.setState({
      submitValue: this.state.inputValue
    })
    this.state.comments.push( obj );
  }

  render()
  {
    return(
      <div>
        {
          this.state.comments.map( ( element ) =>
          {
            return(
              <CommentSubComponent data = { element } />
            )
          })
        }
        
        <form onSubmit = { this.handleSubmit }>
          <input placeholder = "Add a comment" onChange = { this.handleChange }></input>
          <button type = "submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentSection;