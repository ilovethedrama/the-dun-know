import React, { useContext } from "react";
import TheDunKnowLogo from "./TheDunKnowLogo";

import styled from "styled-components";
import { ctxType } from "../types/Context";
import ctx from "../context/ArticleContext"

interface Props {
  screenSize: string
  expandedMenu: boolean;
  setExpandedMenu: Function;
}

const NavContainer = styled.div<{ screenSize: string, expandedMenu: boolean }>`
  font-family: "Playfair Display SC",serif;
  display: flex;
  justify-content: space-between;
 z-index: 10;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-items: center;
background: ${(props) => props.screenSize === "TABLET" ? "#000" : "#fff"};
color: ${(props) => props.screenSize === "TABLET" ? "#fff" : ""};
padding: 20px 40px;  
span {
  cursor: pointer;
}

#more {
  font-weight:900;
}
`;

const NavContent = styled.div<{ screenSize: string, expandedMenu: boolean }>`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => props.screenSize === "TABLET" && props.expandedMenu ? "flex" : "none"};
  flex-flow: ${(props) => props.screenSize === "TABLET" ? "column wrap" : "row wrap"};
  font-size: ${(props) => props.screenSize === "TABLET" ? "column wrap" : "row wrap"};
  display: ${(props) => props.screenSize === "DESKTOP" ? "flex" : ""};
  

  span {
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding: 10px 0;
    
    &:hover {
      border-bottom: 2px solid yellow;
      transition: border-bottom .2s ease; 
    }
  }
`;


const Navbar: React.FC<Props> = ({ screenSize, expandedMenu, setExpandedMenu }) => {
  const articleContext: ctxType = useContext(ctx);

  const navigationList = [
    { title: "Reviews", link: "" },
    { title: "For The Culture", link: "" },
    { title: "The Courts", link: "" },
    { title: "Fresh Cuts", link: "" },
    { title: "The Classics", link: "" },
    { title: "Search", link: "" },
    { title: "Subscribe", link: "" },
  ]

  function toggleMenu() {
    setExpandedMenu(!expandedMenu)
  }

  return (
    <NavContainer expandedMenu={expandedMenu} screenSize={screenSize}>
      <TheDunKnowLogo invert={screenSize === "TABLET"} size={"small"} />
      <NavContent expandedMenu={expandedMenu} screenSize={screenSize}>
        {
          navigationList.map(({ title }) => {
            return <span>{title}</span>
          })
        }
      </NavContent>
      <span id="more" onClick={() => toggleMenu()}>MORE</span>
    </NavContainer>
  )
}

export default Navbar;