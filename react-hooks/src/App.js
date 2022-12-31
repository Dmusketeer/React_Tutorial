import React, { useState, useEffect } from "react";
import ComponentC from "./components/ComponentC";

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
      <UserContext.Provider value={"Dheeraj"}>
        <ComponentC />
      </UserContext.Provider>
    </>
  );
}

export default App;
