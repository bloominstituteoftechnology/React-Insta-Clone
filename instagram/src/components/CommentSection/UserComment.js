import React, { Component } from 'react';

class UserComment
 extends Component {
    render() {
        return (
            <div>
              {this.props.notes.map( note => {
                  return(
                    <p>{note.username} {note.text}</p>
                  );
              })}    
            </div>
        );
    }
}

export default UserComment
;
