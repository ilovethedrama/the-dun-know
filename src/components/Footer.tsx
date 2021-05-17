import React from "react";
import styled from "styled-components";
import TheDunKnowLogo from "./TheDunKnowLogo";

interface Props { }

const Container = styled.div`
  padding: 40px;
  display: flex;
  background: grey;
  color:white;
  flex-flow: column;
  width: 100%;
  text-align: left;
  font-size: 12px;
 
  div ul {
    transition: color ease .5s;

    li:first-child {
      font-weight: 700;
      font-family: 'Playfair Display SC', serif;
    }

    &:hover {
      color: yellow;
      transition: color ease .5s;
    }
    
    li a {
      transition: color ease .5s;
      &:hover {
        transition: color ease .5s;
        color: #fff;
      }
    }  
  }
  
  div:nth-child(1) {
    margin-bottom: 20px;
  }
  
  div:nth-child(2) {
    display: flex;
    flex-flow: row wrap;
    ul {
      list-style-type:none;
      margin-right: 20px;
      flex: 1 1 200px;
       li {
         padding-bottom: 10px;
       }
    }
  }
`;


const Footer: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <TheDunKnowLogo size={"large"} />
        <div>
          <ul>
            <li>About</li>
            <li><a href='#'>Hood Travel Guides</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Join the squad</a></li>
            <li><a href='#'>Opp Watch</a></li>
            <li><a href='#'>In Print</a></li>
          </ul>
          <ul>
            <li>Support</li>
            <li><a href='#'>Lovers Rock v Dancehall</a></li>
            <li><a href='#'>Holla D Ting</a></li>
            <li><a href='#'>Each1 Teach1</a></li>
            <li><a href='#'>Submissions</a></li>
          </ul>
          <ul>
            <li>Site Map</li>
            <li><a href='#'>For The Culture</a></li>
            <li><a href='#'>The Classics</a></li>
            <li><a href='#'>The Courts</a></li>
            <li><a href='#'>Fresh Cuts</a></li>
          </ul>
          <ul>
            <ul>
              <li>Socialize</li>
            </ul>
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-soundcloud"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-spotify"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              <li><a href="#"><i className="fab fa-snapchat-ghost"></i></a></li>
            </ul>
          </ul>
        </div>
      </Container>
    </>

  )
}

export default Footer;