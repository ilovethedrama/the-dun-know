import { useState, useEffect } from "react"

export function useToggleStyling() {
  const [scrollStyle, setScrollStyle] = useState({

  });

  useEffect(() => {
    function toggleScrollStyle() {
      setScrollStyle({})
    }

    window.addEventListener("scroll", toggleScrollStyle)
    toggleScrollStyle();
    return () => window.removeEventListener("scroll", toggleScrollStyle);
  }, [])
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleWindowResize)
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowSize
}