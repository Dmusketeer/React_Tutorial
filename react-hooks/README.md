# React Hooks
<!-- source: w3schools -->
## What is a Hook?
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

- Hooks allow us to "hook" into React features such as state and lifecycle methods. 


### State: 
- State generally refers to application data or properties that need to be tracked.

### Custom Hooks
- If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.


## React useState Hook:
- The React useState Hook allows us to track state in a function component.
- To use the useState Hook, we first need to import it into our component.
 
        
        import { useState } from "react";

- Notice that we are destructuring useState from react as it is a named export.

### Initialize useState
- We initialize our state by calling useState in our function component.
- useState accepts an initial state and returns two values:

    1- The current state. <br />
    2- A function that updates the state.


- Initialize state at the top of the function component.

```js
import {useState} from 'react';
const doSomeTask=()=>{
       const [task,setTask]=useState("")
        return(
                <>
                <h1>Something</h1>
                </>
        )
}
```

- Notice that again, we are destructuring the returned values from useState.
- The first value, task, is our current state.
- The second value, setTask, is the function that is used to update our state.

<b>NOTE : </b> - These names are variables that can be named anything you would like.

- Lastly, we set the initial state to an empty string: useState("")



### Read State:

- We can now include our state anywhere in our component.

- Use the state variable in the rendered component.
```js
import react,{useState} from 'react'
function changeName(){
        const [name,setName]=useState("Ryan")
        return(
                <>
                <h1>Hey My Name is {name}!</h1>
                </>
        ) 
}

```


### Update State
- To update our state, we use our state updater function.

```js
import react,{useState} from 'react'
function changeName(){
        const [name,setName]=useState("Ryan")
        return(
                <>
                <h1>Hey My Name is {name}!</h1>
                <button onClick={()=>setName("Dheeraj")}>Change Name</button>
                </>
        ) 
}

```

### What Can State Hold
- The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

- We could create multiple state Hooks to track individual values.

- Or, we can just use one state and include an object instead! like Create a single Hook that holds an object.


### Updating Objects and Arrays in State
- When state is updated, the entire state gets overwritten.
- What if we only want to update the color of our car?
- If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
- We can use the JavaScript spread operator to help us.

Example:
- Use the JavaScript spread operator to update only the color of the car:

```js

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}
```

- Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.
We then return an object, spreading the previousState and overwriting only the color.

