import logo from './logo.svg';
import './App.css';
function App() {
  //simple variables
  const faName="Dheeraj"
  const laName="Tiwari"
  const age=26
  const job="Developer"
  // const placeHolder="Enter FatherName"
  //array
  const Frinds=["raga","saga","maga"]
  //object
  const myFev={
    "game":"chess",
    "food":"samosa"
  }
  //function
  const placeHolder=()=>{
    return "Enter MotherName";
  }
  
  const blogArr = [{
    "id":1,
    "title": "Blog Title 1",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
  }, {
    "id": 2,
    "title": "Blog Title 2",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
},{
    "id": 3,
    "title": "Blog Title 3",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
}];

const blogCards = blogArr.map( (item,pos)=>{
  console.log(item);
  return(
    <div className="blogCard" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
});


  return (
    <div className="App">
      {/* <h2>FullName : {`${faName} ${laName}`} </h2> 
      <h2>Age : {age} </h2> 
      <h2>JOB : {job} </h2>  */}
      {/* <input type="text" placeholder="Enter Name"/> */}
      {/* <input type="text" placeholder={placeHolder()}/>
      <h3>Best Friend : {Frinds[0]}</h3>
      <h2>MyFevorite Food : {myFev.food}</h2>
      <h2>MyFevorite Game : {myFev.game}</h2>
      <h2>{
        myFev.game==="chess"?"chess":"false"
        }</h2> */}
      {blogCards}
    </div>
  );
}
export default App;
