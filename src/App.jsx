import React from "react";
import useBrowserSize from "./hooks/useBrowserSize";

function App() {
  const browser = useBrowserSize();
  return (
    <>
      <div className="flex justify-evenly pt-3 px-3 text-balance">
        <h3 className="md:text-3xl text-lg font-bold underline underline-offset-4 text-left">
          Browser window width : {browser.width}
        </h3>
        <h3 className="md:text-3xl text-lg font-bold underline underline-offset-4 text-right">
          Browser window height : {browser.height}
        </h3>
      </div>
    </>
  );
}

export default App;
