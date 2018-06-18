import React from 'react';

const Comments = props => {
    
    {this.state.dummyData.map(data => {
      return <p className="App-intro" key={data.id}>
        <img src={data.thumnailUrl} />
        {data.username}
        <img src={data.imageUrl} />
        {data.likes}
      </p>
    })}

}

export default Comments;