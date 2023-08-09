import React, { useState } from "react";

const Form = () => {
  const [Details, setDetails] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(Details);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails((values) => ({ ...values, [name]: value }));
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
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
