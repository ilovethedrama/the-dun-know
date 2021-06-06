import React, { useEffect, useState } from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import { PageContainer } from "./../common/styles";
import { useWindowSize } from "../hooks/hooks";
import styled from "styled-components";
import TestArticle from "../components/TestArticle";

interface Props { }
const PageContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const LandingScreen: React.FC<Props> = () => {
  const [screenSize, setScreenSize] = useState<"MOBILE" | "TABLET" | "DESKTOP">("DESKTOP")
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
      <Navbar screenSize={screenSize} />
      <PageContent>
        The home page bruh!
        <TestArticle></TestArticle>
      </PageContent>
      <Footer />
    </PageContainer>
  )
}

export default LandingScreen;