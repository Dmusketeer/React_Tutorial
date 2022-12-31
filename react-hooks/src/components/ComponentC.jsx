import React,{useContext} from 'react';
import {UserContext} from '../App';

const ComponentC = () => {
    const user=useContext(UserContext)
    return (
        <div>
            {/* <UserContext.Consumer>
                {
                   user=>{
                    return <h1>My Name is {user}</h1>
                   }
                }
            </UserContext.Consumer> */}
            
                <h1>Hey this is {user}</h1>
            
        </div>
    );
}

export default ComponentC;
