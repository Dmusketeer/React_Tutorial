
import React, {Component} from 'react';
import Student from './Components/student'

//class components:
function App(){
    return(
        <>
         <Student fname={"Dheeraj"} lname="Tiwari" others={{age:27 ,address:"delhi"}}/>
         <Student fname={"Raj"} lname="Varma" others={{age:25 ,address:"noida" }}/>
         <Student fname={"Santanu"} lname="Rao" others={{age:29 ,address:"US"}}/>
        </>
         
)
=======
import './App.css';
import Users from './Components/user.js';
import Product from './Components/products.js';
import Review from './Components/review.js';

function App() {
  return (
    <>
    <Users />
    <Product />
    <Review />
    </>
  );

}
export default App;