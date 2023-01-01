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

<hr />

## React useEffect Hook

- The useEffect Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- useEffect accepts two arguments. The second argument is optional.

  ```js
  useEffect(<function>, <dependency>)
  ```


```js
function App(){
  const [count, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => {
        return count + 1;
      });
    }, 1000);
  });

  
  return (
    <>
      <h1>I have render {count} times</h1>
    </>
  );
}
```

- But wait!! It keeps counting even though it should only count once!

- useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

- This is not what we want. There are several ways to control when side effects run.

- We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.



1. No dependency passed:

```js
useEffect(() => {
  //Runs on every render
});
```
2. An empty array:
```js
useEffect(() => {
  //Runs only on the first render
}, []);

```
3. Props or state values:
```js
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

- Example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

```js
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>ADD</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
```

- If there are multiple dependencies, they should be included in the useEffect dependency array.

#### Effect Cleanup
- Some effects require cleanup to reduce memory leaks.
- Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
- We do this by including a <b>return function</b> at the end of the useEffect Hook.

<hr />

## React useContext Hook

#### React Context
- React Context is a way to manage state globally.
- It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

#### <b>The Problem</b>
- State should be held by the highest parent component in the stack that requires access to the state.
- To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
- To do this without Context, we will need to pass the state as "props" through each nested component. This is called "<b>prop drilling</b>".

Passing "props" through nested components:

```js
import React,{useState} from 'react'

const TestingComponent=()=>{
const [user,setUser]=useState("Dheeraj")

    return(
        <>
        <ComponentA user={user}/>
        </>
    )
}

const ComponentA = ({user}) => {
    return (
        <div>
             <ComponentB user={user}/>
        </div>
    );
}

const ComponentB = ({user}) => {
    return (
        <div>
             <ComponentC user={user}/>
        </div>
    );
}

const ComponentC = ({user}) => {
    return (
        <div>
             <ComponentD user={user}/>
        </div>
    );
}

const ComponentD = ({user}) => {
    return (
        <div>
            Hello! {user}.
        </div>
    );
}
```
Even though components A,B and C did not need the state, they had to pass the state along so that it could reach component D.

### The Solution
- The solution is to create context.

### Create Context
- To create context, you must Import createContext and initialize it:
```js
const UserContext = createContext()
```

### Context Provider
- Wrap child components in the Context Provider and supply the state value.

```js
const TestingComponent=()=>{
const [user,setUser]=useState("Dheeraj")

    return(
        <>
        <UserContext.Provider value={"Dheeraj"}>
        <ComponentB user={user}/>
        </UserContext.Provider>
        </>
    )
}

```
- Now, all components in this tree will have access to the user Context.
- Use the useContext Hook
- In order to use the Context in a child component, we need to access it using the useContext Hook.
- First, include the useContext in the import statement:

```js
import { useState, createContext, useContext } from "react";
```
- Then you can access the user Context in all components:

```js
const ComponentD = (user) => {
    const user=useContext(UserContext)
    return (
        <div>
            Hello! {user}.
        </div>
    );
}
```

<hr />
