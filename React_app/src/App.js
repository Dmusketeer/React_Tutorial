import './App.css';
// import Users from './Components/user.js';
// import Product from './Components/products.js';
// import Review from './Components/review.js';

// const data="Dheeraj"

function App() {
  let data="Dheeraj Tiwari";
  function Change() {
   return (
      data="maria",
      alert(data)
    )
  }

  return (
    <>
    <h1>Hello {data}!</h1> {/*The value of data is maria now but it is not updated yet here.this is the reason we are using states and props*/}
    <button onClick={Change}>Click</button> 
    {/* <button onClick={()=>alert("Hello")}>Hello</button> */}
    </>
  );
}

export default App;
