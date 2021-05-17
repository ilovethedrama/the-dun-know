import React from "react";
import TheDunKnowLogo from "./TheDunKnowLogo";

interface Props { }

const Navbar: React.FC<Props> = () => {
  return (
    <>
      <TheDunKnowLogo size={"small"} />
      <div>Navbar content</div>
    </>
  )
}

export default Navbar;