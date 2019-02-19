import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

//images
import mainPhone from "../assets/mainphone.png";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import phone3 from "../assets/phone3.jpg";
import phone4 from "../assets/phone4.jpg";
import phone5 from "../assets/phone5.jpg";
import getapp1 from "../assets/getapp01.png";
import getapp2 from "../assets/getapp02.png";
import sprite from "../assets/sprite.png";

import Register from "./Register";

const LandingWrapper = styled.div`
  background: #fafafa;
  .landing_wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .parent {
    position: relative;
    top: 0;
    left: 0;
  }
  @media (max-width: 860px) {
    .parent {
      display: none;
    }
  }
  .image1 {
    position: relative;
    top: 0;
    left: 0;
  }

  .slide {
    display: none;
  }
  .active {
    position: absolute;
    top: 100px;
    left: 151px;
    width: 240px;
    z-index: 10;
    display: block;
  }

  .get_app {
    width: 140px;
  }

  .register {
    border: 1px solid #e6e6e6;
  }

  .get_app_parent {
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .get_app {
      margin-right: 10px;
    }
  }
  .get_app_subtitle {
    color: #262626;
    font-size: 14px;
    text-align: center;

    margin: 20px auto;
  }
  .right_info {
    min-width: 390px;
    max-width: 390px;
  }
  .have_account {
    border: 1px solid #e6e6e6;
    font-size: 15px;
    padding: 20px 0 5px 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3b3b3b;
    background: white;
  }
  .title_sprite {
    background-repeat: no-repeat;
    background-position: -98px -150px;
    height: 51px;
    width: 175px;
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
    margin: 52px auto 22px;
  }
`;

const images = [
  { src: phone1 },
  { src: phone2 },
  { src: phone3 },
  { src: phone4 },
  { src: phone5 }
];

class Landing extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    if (this._isMounted) {
      this.interval = window.setInterval(() => {
        this.next();
      }, 4500);
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(this.interval);
  };

  next = e => {
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const slides = images.map((images, index) => {
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <img src={images.src} alt="..." className={computedClass} key={index} />
      );
    });
    return (
      <LandingWrapper>
        <div className="landing_wrapper">
          <div className="parent">
            <img
              src={mainPhone}
              alt="main iphone instagram login"
              className="image1"
            />
            {slides}
          </div>
          <div className="right_info">
            {/* <Link to="/register">Register</Link> */}
            <div className="register" style={{ background: "white" }}>
              <div
                className="title_sprite"
                style={{
                  backgroundImage: `url(${sprite})`
                }}
              />
              <Register />
            </div>
            <div className="have_account">
              <p>
                Have an account ?
                <Link
                  className="login_linke"
                  to="/login"
                  style={{ marginLeft: 4 }}
                >
                  Log In
                </Link>
              </p>
            </div>
            <p className="get_app_subtitle">Get the app</p>
            <div className="get_app_parent">
              <img className="get_app" src={getapp1} alt="get app" />
              <img className="get_app" src={getapp2} alt="get app" />
            </div>
          </div>
        </div>
      </LandingWrapper>
    );
  }
}

export default Landing;
