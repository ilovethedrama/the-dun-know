import React, { useEffect, useState } from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import { PageContainer } from "./../common/styles";
import { useTitleStickEffect, useWindowSize } from "../hooks/hooks";
import styled from "styled-components";
import TestArticle from "../components/TestArticle";

interface Props {
  expandedMenu: boolean;
  setExpandedMenu: Function;
}
const PageContent = styled.div`
  flex: 1;
`;

const LandingScreen: React.FC<Props> = ({ expandedMenu, setExpandedMenu }) => {
  const [screenSize, setScreenSize] = useState<"MOBILE" | "TABLET" | "DESKTOP">("DESKTOP")
  const [invert, setInvert] = useState(false)
  const size = useWindowSize();


  useEffect(() => {
    if (size.width < 1000) {
      setScreenSize("TABLET")
    } else {
      setScreenSize("DESKTOP")
    }
  }, [size.width])

  return (
    <PageContainer>
      <Navbar setExpandedMenu={setExpandedMenu} expandedMenu={expandedMenu} screenSize={screenSize} />
      <PageContent>
        The home page bruh!
        <TestArticle expandedMenu={expandedMenu} screenSize={screenSize}></TestArticle>
      </PageContent>
      <Footer />
    </PageContainer>
  )
}

export default LandingScreen;