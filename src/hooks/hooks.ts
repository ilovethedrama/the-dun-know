import { useState, useEffect } from "react"




export function useTitleStickEffect() {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollStyle, setScrollStyle] = useState({

  });


  useEffect(() => {
    // function titleStick() {
    //   if (window.pageYOffset >= 250) {
    //     headingTitle.classList.add("sticky");
    //     console.log('sticky added');
    //   } else {
    //     headingTitle.classList.remove("sticky");
    //     console.log('sticky removed');
    //   }
    // }
    function onScroll() {
      let currentPosition = window.pageYOffset
      if (currentPosition > 250) {
        console.log("we be scrollin my duuu");
        setScrolling(false)
      } else {
        console.log("we aint scrollin son");
        setScrolling(true)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll)
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolling, scrollTop])
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