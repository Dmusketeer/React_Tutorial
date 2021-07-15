import logo from './logo.svg';
import './App.css';
const name="Dheeraj";
const currentDate=new Date();
const hours= currentDate.getHours();
const year= currentDate.getFullYear();
const randomColor={
  color:""
};

let greeting;
if(hours<12){
  greeting="Good Morning";
  randomColor.color="red";
}
else if(hours<18 ){
  greeting = "Good afternoon";
  randomColor.color = "green";
}else{
  greeting = "Good evening";
  randomColor.color = "blue";
}

function App() {
  return (
    <div className="App">
      <h3 style={randomColor}>{greeting }</h3>
      <h2>Hey {name}</h2>
      <h2>current Year : {year}</h2>
      <h1>happy Learning!</h1>
    </div>
  );
}

export default App;
