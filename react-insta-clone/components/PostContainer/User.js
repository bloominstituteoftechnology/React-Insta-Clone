import React, {Component} from 'react';
import dummyData from "./dummy-data";
import usercss from "./user.css";

class User extends Component {
  render() {
    return (<div className="Header">
      <>
        {dummyData.map(data => (
          <>
            <div key={data.username}>
                <img src={data.imageUrl}/>
              <strong>{data.username}</strong>


            </div>

          </>
        ))}
      </>

    </div>);
  }
}

export default User;
