import { useState, useEffect } from "react";

function useBrowserSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleBrowserSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", handleBrowserSize);
    return () => {
      window.removeEventListener("resize", handleBrowserSize);
    };
  }, []);

  return windowSize;
}

export default useBrowserSize;
