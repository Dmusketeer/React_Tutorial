import logo from './logo.svg';
import './App.css';
const name="Dheeraj";
const currentDate=new Date();
const year= currentDate.getFullYear();
function App() {
  return (
    <div className="App">
      
      <h2>Hey {name}</h2>
      <h2>current Year : {year}</h2>
      <h1>happy Learning!</h1>
     
    </div>
  );
}

export default App;
