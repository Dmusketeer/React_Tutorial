import React from 'react' ;
function Student(props){
    return(
        <>
        <h1>Hello! {props.fname} {props.lname}</h1>
        <h2>age:{props.others.age} Adress:{props.others.address}</h2>
        </>
    )
}
export default Student;