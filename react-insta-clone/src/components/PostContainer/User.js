import React, {Component} from 'react';
import dummyData from "../../dummy-data.js";
import usercss from "./user.css";

class User extends Component {
  render() {
    return (<div className="Header">
      <>
        {dummyData.map(data => (
          <>
            <div key={data.username}>
                <img src={data.imageUrl} alt="icon"/>
              <strong>{data.username}</strong>


            </div>

          </>
        ))}
      </>

    </div>);
  }
}

export default User;
