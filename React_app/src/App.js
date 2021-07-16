import './App.css';
import {useState} from 'react';  //useState is a hook for state
// import Users from './Components/user.js';
// import Product from './Components/products.js';
// import Review from './Components/review.js';

// const data="Dheeraj"

function App() {
//  const [data,setData] = useState("Name Please");
 const [data,setData] = useState(0);

 function updateData(){
   setData(data+1);
 }
  return (
    <>

    {/* <h1>Hello {data}!</h1> The value of data is maria now but it is not updated yet here.this is the reason we are using states and props */}
    <h1>{data}</h1>
    <button onClick={updateData}>Update</button> 
    {/* <button onClick={()=>alert("Hello")}>Hello</button> */}
    </>
  );
}

export default App;
