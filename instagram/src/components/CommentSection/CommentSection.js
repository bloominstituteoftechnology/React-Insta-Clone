import React, { Component } from 'react';

export const Comments = (props) => {
    return (
      <div >
        {props.dummyData.map((iguser => {
          return (
            <div id='one' key={iguser.username}>
    
                <h4>{iguser.comments[0].username}</h4>
                <p>{iguser.comments[0].text}</p>
            </div>
            );
        }))}
      </div>
    )
    };