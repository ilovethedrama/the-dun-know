import React from "react";
import TheDunKnowLogo from "./TheDunKnowLogo";

import styled from "styled-components";

interface Props {
  screenSize: string
}

const NavContainer = styled.div`
  font-family: "Playfair Display SC",serif;
  display: flex;
  justify-content: space-between;
  padding: 20px;  
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* background: black;
  color: white; */
`;

const NavContent = styled.div<{ screenSize: string }>`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-flow: ${(props) => props.screenSize === "TABLET" ? "column wrap" : "row wrap"};
  font-size: ${(props) => props.screenSize === "TABLET" ? "column wrap" : "row wrap"};
`;


const Navbar: React.FC<Props> = ({ screenSize }) => {

  const navigationList = [
    { title: "Reviews", link: "" },
    { title: "For The Culture", link: "" },
    { title: "The Courts", link: "" },
    { title: "Fresh Cuts", link: "" },
    { title: "The Classics", link: "" },
    { title: "Search", link: "" },
    { title: "Subscribe", link: "" },
  ]

  return (
    <NavContainer>
      <TheDunKnowLogo size={"small"} />
      <NavContent screenSize={screenSize}>
        {
          navigationList.map(({ title }) => {
            return <span>{title}</span>
          })
        }
      </NavContent>
      <span>BURGER ICON</span>
    </NavContainer>
  )
}

export default Navbar;