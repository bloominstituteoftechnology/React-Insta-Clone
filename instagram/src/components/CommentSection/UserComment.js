import React, { Component } from 'react';

class UserComment
 extends Component {
    render() {
        console.log('check this: ', this.props.notes);
        return (
            <div>
              {this.props.notes.map( (note,index) => {
                  return(
                    <p key={index}><span>{note.username}{"  "}</span> {note.text}</p>
                  );
              })}    
            </div>
        );
    }
}



export default UserComment;
