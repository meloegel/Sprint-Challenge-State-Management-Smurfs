1. What problem does the context API help solve?

In your typical react application state is passed top-down (parent to child) via props, but this can become very cumbersome quickly, especially when those props are required by many components across your application. However with the introduction of reacts Context API  you no longer have to pass props down from component to component - what React devs call “prop drilling”. We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props!

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your app to the store, they are the only source of information for the store. Reducers specify how the app’s state changes in response to actions sent to the store. The store is what holds the state. The store is the single source of truth because there is only one store per application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and available to all components in the application tree, component state is state that is only available within that component and children.  A good time to use component state over application state would be something like state for a submit on a button, global state would be unnecessary. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware for writing sync and async logic that interacts with the store.  You have to add more action creators for the different instances, i.e get data, update data, error in data etc.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context Api is very easy to use and from what I can tell with my little experience requires less code. It also makes it easier to get state where it needs to be in your application. 
