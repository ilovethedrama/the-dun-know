import React, { useEffect } from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import { PageContainer } from "./../common/styles"

interface Props { }

const LandingScreen: React.FC<Props> = () => {
  return (
    <PageContainer>
      <Navbar />
      <div>The home page bruh!</div>
      <Footer />
    </PageContainer>
  )
}

export default LandingScreen;