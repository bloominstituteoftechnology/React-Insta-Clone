import React from 'react';
 import './postContainer.css';

const PostContainer = (props) => {
 

    
     let users = props.posteProps.map((p) => p.username); 
    
    let user1 = users[0];
    return (
        <div className="Hilal">
            <div className="Top_content">
                <img src="https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg"/>
                {user1}
            </div>
             <div className="Midle_content">
                <img className="Midle_img" src="https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg"/>
            </div>
        
        </div>
       
    )

};

export default PostContainer;