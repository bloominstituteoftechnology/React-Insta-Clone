import React from 'react';
import Profile from '../../assets/profile.jpg';
import "./AccountContainer.css";

const AccountContainer = (props) => {
    return (
        <div className="account-sidebar">
            {/* div with thumbnail profile pic and another div with username and email info */}
            <div className="account-info">
                <img src={Profile} alt="profile"/>
                <div className="contact-info">
                    <h4>ckopecky1952</h4>
                    <p>kopecky12112@gmail.com</p>
                </div>
            </div>
            <div className="stories-card">
                This will be the stories card.
            </div>
            <div className="suggestions-card">
                This will be the suggestions for you card.
            </div>
            <div className="footer-information">
                {props.footer.map(link => {
                    return (
                        <a href={`#${link}`}>{link} ·</a> 
                    )
                })}
                <p>© 2019 INSTAGRAM
</p>
            </div>
        </div>
    );
};

export default AccountContainer;