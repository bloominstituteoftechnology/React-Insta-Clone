import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserComment extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            commentsArray: prop.notes
        }
    }
    createName = () => {
        const names = ["venky", "myke", "Oliver", "Javier", "Dan", "Rana", "pal-myke","Jhon", "Eliz", "Dana Moore","Soni","Reed"];
        var index = Math.floor(Math.random() * names.length);
        return names[index];
    }
    addComments = (event) => {
        // console.log(event);
             
      if(event.key === 'Enter' && event.target.value !== '') {
        let name = this.createName();
  	 this.setState({
  	 	  commentsArray: [...this.state.commentsArray, {text: event.target.value, id: Date.now(), username: name }]
  	 }); 
  	 
  	 event.target.value = '';
    }
  }
    render() {
        //  console.log('check this: ', this.addComments);
        return (
            <>
            <div className="para-div extraPadding" add={this.addComments}>
              {this.state.commentsArray.map( (note,index) => {
                  return(
                    <p key={index}><span>{note.username}{"  "}</span> {note.text}</p>
                  );
              })} 
            </div>

            <div className='input input-holder'>
                <input type='text' placeholder='Add a Comment' className="comment-input" onKeyPress={this.addComments}/>
                <div className='fonta'>
                    <FontAwesomeIcon className="crossmark" icon={["fa", "ellipsis-h"]} />
                </div>
            </div>
          </>  
        );
    }
}



export default UserComment;
