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
}
export default App;