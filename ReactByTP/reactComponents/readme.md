# --------------------------- Components ---------------------------

- A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 

In React, we mainly have two types of components : 
- 1) Functional components
- 2) Class components

<hr>

## Functional Components: 
- Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters, Below example shows a valid functional component in React: 
 
        const Democomponent=()=>
        {
            return <h1>Welcome Message!</h1>;
        }
        

## Class Components:
- The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use JavaScript ES6 classes to create class-based components in React. Below example shows a valid class-based component in React: 

        class Democomponent extends React.Component
        {
            render(){
                return <h1>Welcome Message!</h1>;
            }
        }





## Rendering Components
- rendering components using ReactDOM.render() method. React is also capable of rendering user-defined components.
- Below syntax shows how to initialize a component to an element:
  
        const elementName = <ComponentName />;

- In the above syntax, the ComponentName is the name of the user-defined component. 
- <b>Note</b> : The name of a component should always start with a capital letter. This is done to differentiate a component tag with html tags.

        import React from 'react';
        import ReactDOM from 'react-dom';
        
        // This is a functional component
        const Welcome=()=>
        {
                return <h1>Hello World!</h1>
        }
        // rendering funtional components
        ReactDOM.render(
            <Welcome />,
            document.getElementById("root")
        );





## Differences between Functional Components and Class Components in React : 

- A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.	A class component requires you to extend from React. Component and create a render function which returns a React element.
- There is no render method used in functional components.	It must have the render() method returning HTML
- functional components known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
- class components Also known as Stateful components because they implement logic and state.
React lifecycle methods (for example, componentDidMount) cannot be used in functional components. React lifecycle methods can be used inside class components (for example, componentDidMount).