import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    } else {
      return {
        width: 0,
        height: 0,
      };
    }
  }

  const [windowDimensions, setWindowDimensions] = useState<{
    width: any;
    height: any;
  }>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
