import React, { useState, useEffect } from "react";
import FocusInput from "./components/FocusInput";

export const UserContext = React.createContext();
function App() {
  // const [count, setCounter] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter((count) => {
  //       return count + 1;
  //     });
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCounter((count) => {
  //       return count + 1;
  //     });
  //   }, 1000);
  //   return () => setTimeout(timer);
  // }, []);
  return (
    <>
      <FocusInput />
    </>
  );
}

export default App;
