import React from 'react';
import {UserContext} from '../App';
const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                   user=>{
                    return <h1>My Name is {user}</h1>
                   }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentC;
