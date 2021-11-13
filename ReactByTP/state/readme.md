# ---------------------------------- State ----------------------------------

- “state” is what allows you to create components that are dynamic and interactive. <b>OR</b> the State of a component is an object that holds some information that may change over the lifetime of the component
  
## Difference of Props and State :
- Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
- States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation.
- While Props are set by the parent component, State is generally updated by event handlers.


`App.js`

        import React from 'react';

        class App extends React.Component {
        constructor(props) {
            super(props);
                
            this.state = {
                header: "Header from state...",
                content: "Content from state..."
            }
        }
        render() {
            return (
                <div>
                    <h1>{this.state.header}</h1>
                    <h2>{this.state.content}</h2>
                </div>
            );
        }
        }
        export default App;




        