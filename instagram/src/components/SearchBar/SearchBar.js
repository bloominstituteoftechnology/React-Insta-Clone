import React from 'react';
//import './SearchBar.css';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const Header = styled.header`
border-bottom: 1px solid #3333;
height: 80px;
line-height: 70px;
display: -ms-flexbox;
display: flex;
-ms-flex-pack: justify;
justify-content: space-between;
background: #ffffff;
}
`;

const ImageWrapper = styled.div`
height: 50px;
`;

const Logo = styled.img`
height: 100%;
`;

const SocialWrapper = styled.div`
display:flex;
`;

const Social = styled.div`
width: 20px;
height: 20px;
`;

const SearchBar = () => {
    return(
            <Header>
              <ImageWrapper>
                <Logo alt="instagram logo" src={IGLogo} className="logo-image" />
              </ImageWrapper>
              <div>
                <input type="text" placeholder="Search" />
              </div>
              <SocialWrapper>
                <Social>
                  <i className="fa fa-compass" />
                </Social>
                <Social>
                  <i className="fa fa-heart" />
                </Social>
                <Social>
                  <i className="fa fa-user-circle" />
                </Social>
              </SocialWrapper>
            </Header>
          );
}

export default SearchBar;