import React, { Component } from 'react';

class UserComment
 extends Component {
    render() {
        return (
            <div>
              {this.props.notes.map( note => {
                  return(
                    <p><span>{note.username}{"  "}</span> {note.text}</p>
                  );
              })}    
            </div>
        );
    }
}

export default UserComment
;
