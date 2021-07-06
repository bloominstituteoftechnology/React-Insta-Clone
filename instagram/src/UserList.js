import React, { Component } from 'react';

export const UserList = (props) => {
    return(
        <div>
            {
                props.dummyData.map(user => {
                    return (
                        <div className="box" key = {user.username}>
                            <p>{user.username}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}