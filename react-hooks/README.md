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

## Initialize useState
- We initialize our state by calling useState in our function component.
- useState accepts an initial state and returns two values:

    1- The current state. <br />
    2- A function that updates the state.










