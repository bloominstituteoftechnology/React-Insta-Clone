import React from 'react';
import { FooterLinks } from '../../styled-components/LoginStyles';

const Footer = props => {
  const links = ["ABOUT US","SUPPORT","PRESS","API","JOBS","PRIVACY","TERMS","DIRECTORY","PROFILES","HASHTAGS","LANGUAGE",]

  return(
    <footer className="footer-sp">
      <FooterLinks>
        {links.map(link => <a href="#" key={Math.random()}>{link}</a>)}
      </FooterLinks>

      <p>&copy; 2019 INSTAGRAM</p>
    </footer>
  );
}

export default Footer;
