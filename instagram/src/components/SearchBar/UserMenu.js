import React from 'react';
import gramcompass from '../../logos/gramCompass.png';
import gramheart from '../../logos/gramheart.jpg';
import gramuser from '../../logos/gramUser.png';

function UserMenu(props) {
   return <div className="UserMenu">
            <img src={gramcompass} alt="compass" height='30' width= '30' />
            <img src={gramheart} alt="heart" height='30' width= '30' />
            <img src={gramuser} alt="userIcon" height='30' width= '30' />
        </div>
}


export default UserMenu;