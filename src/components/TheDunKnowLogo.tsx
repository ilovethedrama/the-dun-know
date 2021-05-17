import React from 'react';
import styled from "styled-components";

interface Props {
  size: string;
}

const Container = styled.div<{ size?: string }>`
  div {
    display: inline-flex;
    flex-flow: column wrap;
    margin-bottom:15px;
    color: black;


    span:nth-child(1) {
      font-family: "Bowlby One SC", cursive;  
      display:inline-block;
      flex: 0;
      font-size: ${(props) => props.size === "small" ? "21px" : "2.5vw"};
    }
    span:nth-child(2) {
      flex: 1;
      display:inline-block;
      font-family: "Playfair Display SC", serif;
      font-size: 3.8vw;
      font-size: ${(props) => props.size === "small" ? "32px" : "3.8vw"};
      line-height: 10px;
    }
    
    /* @media screen and (min-width: 320px) {
      span:nth-child(1) {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
      }
      span:nth-child(2) {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
      }
    } */
    
    @media screen and (min-width: 1000px) {
      span:nth-child(1) {
        font-size: ${(props) => props.size === "small" ? "21px" : "34.15px"};
      }  
      span:nth-child(2) {
        font-size: ${(props) => props.size === "small" ? "32px" : "51.908px;"};  
      }  
    }
  }
`;



const TheDunKnowLogo: React.FC<Props> = ({ size }) => {

  return (
    <Container size={size}>
      <div>
        <span>The Dun</span>
        <span>Know</span>
      </div>
    </Container>
  )
}

export default TheDunKnowLogo