import React, { useState } from "react";
import "./App.css";
// import Modal from "./Modal/Modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyle = {
    overlay: {
      backgroundColor: "black",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <button type="submit" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} style={customStyle}>
        <h1>Hey Bro you Are doing Great!!</h1>
        <button onClick={() => setIsOpen(false)}>Back</button>
      </Modal>
    </>
  );
}

export default App;
