import React from "react";
import "./Home.css";
const Home = (props) => {
  let friends = [
    {
      Name: "Prakhar",
      age: 27,
      address: "Farrukhabad",
    },
    {
      Name: "Rahul",
      age: 26,
      address: "kasia",
    },
    {
      Name: "Pandit",
      age: 28,
      address: "jaunpur",
    },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.Name}</td>
                <td>{value.age}</td>
                <td>{value.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
