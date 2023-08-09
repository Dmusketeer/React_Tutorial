import React, { useState } from "react";

const Form = () => {
  const [Details, setDetails] = useState("");
  const [Textarea, setTextarea] = useState("Content of text area");
  const [Selected, setSelected] = useState("Altroz");

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(Details);
    alert(Textarea);
    console.log(Selected);
  };

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDetails((values) => ({ ...values, [name]: value }));
  };
  const handleSelected = (event) => {
    setSelected(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>
          Enter Your Name:
          <input
            type="text"
            name="userName"
            value={Details.userName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Your Name:
          <input
            type="number"
            name="Age"
            value={Details.Age || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <textarea
            value={Textarea}
            onChange={handleTextareaChange}
            cols="30"
            rows="10"
          />
        </label>
        <select value={Selected} onChange={handleSelected}>
          <option value="Ford">Ford</option>
          <option value="Altroz">Altroz</option>
          <option value="I20">I20</option>
          <option value="Swift">Swift</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
