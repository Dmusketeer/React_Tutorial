import React, { useState, useEffect } from "react";
function App() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => {
        return count + 1;
      });
    }, 1000);
  }, []);
  return (
    <>
      <h1>I have render {count} times</h1>
    </>
  );
}

export default App;
