import React from 'react';

const Comm = (props) => {
    console.log("Props", props);
return <div>{props.comments.map(c => <div key={c.username + c.text} className="commas"> <b>{c.username}:</b> "{c.text}"</div>)}</div>
}

export default Comm;