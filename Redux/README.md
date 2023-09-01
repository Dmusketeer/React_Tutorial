# Getting started with Redux

## History of Redux

- Redux is inspired from a design pattern based on Flux, which was developed by Facebook.
- MVC design pattern allows applications to have two-way communication between models and views.
- Changing data in a model can trigger data changes in multiple views. When there are multiple models and views, understanding the data change flow and making changes can become an intimidating task.

### About Flux

- To understand how data changes flow through an application, Facebook developed a new design pattern, Flux.
- Flux follows uni-directional data flow.

### How Flux works?
- Changes are initiated with Action objects that describe the change.
- A Dispatcher sends the action to appropriate store.
- The Store is responsible for maintaining the application state.
- When the store updates the data, the View and the screen changes, reflecting the data back to the user.
- As a Flux application grows, it may include multiple stores and views, but the data flow remains unidirectional.
- All changes in a Flux application begin with dispatching actions and end with updating views.

### Flux Implementations

- Flux itself is more of a design pattern than a library.
- Over some time, a number of flux implementations have emerged in Js community.
- Redux, Flummox, Alt, Reflux, Fluxxer, McFly, and many more.
- Each of these libraries represent different implementations of Flux.
- Due to its simplicity and ease of use, Redux has emerged as one of the winners in the Flux eco-system.

## What is Redux?
- Redux is a predictable state container for JavaScript apps.
- Using Redux, developers can incorporate simplified and centralized approach to state management within the client application. Redux makes it easier to understand and debug applications.
- It helps in writing applications that behave consistently and provides a great developer experience, through features like Hot module replacement and Debugging with time travel.
- While Redux is widely used with React, it can very well be used with AngularJS, BackboneJS and others.

## Understanding Redux
- JavaScript applications are managing more state than ever before. State to be managed includes:

        - Server Response and Cache data
        - Locally created data
        - UI state with active routes, selected tabs, spinners, etc.
- Managing this ever-changing state is getting hard and complicated. At some point, the developer loses control over the when, why, and how of the app state, making it hard to replicate bugs or add new features.
- This is where Redux comes to the rescue.


## Redux vs Flux
- In Flux, an action is sent to the dispatcher, then it is dispatched to one or more stores before the view is updated.
- In Redux, there is only one store that dispatches the actions directly. Hence, all the state will be located in one place, making it a single source of truth.
- Example: In a social media application, everything about the current state (user information, preferences, posts, likes, friends, etc.) of the application is in one place. This makes it much easier to figure out the data changes within the application and also track down bugs.