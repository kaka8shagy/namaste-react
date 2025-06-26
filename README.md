# Namaste React

## Parcel (It's a BEAST)
- Dev Build (No config required) 
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Faster builds - using caching
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Better Error Handling (beautiful messages)
- HTTPS
- Tree Shaking - remove unused code for you
- Different dev and bundles

## JSX
- JSX and React are different
- Merges HTML and JS code to make development simpler
- HTML/XML like syntax, not HTML/XML
- In this project, its understood because of Parcel
- Its a mix of HTML, CSS, JS which is converted into React code and then into HTML, JS, CSS applicable to DOM

## Babel
- Parcel uses Babel to transpile JSX into JS code (React.createElement)
- This JS code now is used to render HTML
- You can call it a transpiler or JS compiler
-

## Components
- 2 types
1. Class Component - OLD
2. Functional Component - NEW
- Must be named starting with capital letter to make sure React understands its a component
- These 3 do the same thing
    1. {Title()}
    2. <Title />
    3. <Title></Title>

## Cross Site Scripting
- If you get some response from API or user, and use it in your JS it might be harmful
- React handles this for you by sanitizing your input

## Learn about building config driven UI
- Where you get data in a certain way and based on that you show the UI
- A good senior dev must have knowledge of APIs and contribute to how to structure the APIs and their responses

## CDN
- Used to store static content
- Easy to access, cache for long time, also region based availability so less latency

## Key is required
- Each item in a list needs its own unique key
- This helps React be more performant
- React needs to know which element is linked to which item for which it needs the key
- So if a new element comes in with a new key, React will just add that and keep everything else as it is
- React recommends not to use index as a key if the order of items can change

## Code Structure
- All the JS code should be inside `src` folder
- All components should be kept inside `components` folder
- You can structure pages/features as well, but make sure to be consistent
- Have separate files for constants
- Have a utils folder where you have all utility functions, preferrably in appropriately named files
- 2 types of exports
  - default should be used mostly when exporting a single thing (eg. component)
  - named should be used where there are multiple exports from a single file

## React Hooks
- Utility functions provided by React to help manage state of components
- Most important hooks
1. useState
2. useEffect

## Reconciliation Algorithm aka React Fiber (came with React 16)
- React builds a virtual DOM based on the state, props and JSX
- Virtual DOM is representation of actual DOM
- Diff algorithm finds the difference between 2 virtual DOMS previous and current (basically diff between 2 JS objects)
- Read more about it and in detail here https://github.com/acdlite/react-fiber-architecture

## Monolith vs Microservices Architecture
- Traditionally we only had monolith project, where we had a single app which contained everything no matter how big
- But this caused multiple issues, like these
1. build everything for a small change
2. test everything for a small change
3. hard to manage if different teams are working on it
- Microservices was introduced to address this issue specifically
- It breaks down a big app into multiple smaller ones which communicate with each other when required
- The main reason here is Separation of Concern and Single Responsibility Principle
- Now all the small services need to communicate with each other
- Think of your react app as a microservice which connects with multiple services to build its UI
- Each service will run on a different port

## Handle CORS error on local
- Use a CORS plugin to handle it OR
- Use https://corsproxy.io/ like this https://corsproxy.io/?url=https://example.com
- CorsProxy allows web applications to securely access resources from different domains, overcoming browser restrictions.
- This will help you with localhost as well as cross origin requests

## Somethings about React Hooks
- useEffect is called
    - everytime the component is rendered when no dependency array
    - only once on intial render when empty dependency array
    - called only when dependency changes when dependency array has values
- Always have useState on the top of component code
- Never use hooks inside if else

## Routing in React
- 2 types of Routing in Web Development
1. Client Side - New Modern Way (SPA)
2. Server Side - Old traditional way
- In React we want to do client side routing
- React Router is a powerful tool for having simple navigation while building a SPA
- 

## GraphQL
- Helps limit the amount of data you fetch
- You can fetch only those details that you actually need, fetch more if required

## Class based component
- Use class and constructor
- Class must extend React.Component
  - It is necessary for class components to gain access to React's core features, enabling them to manage state
    respond to lifecycle events, and render UI elements.
- Use this.state and this.props for state and props
- setState in class = useState in function
- Doing super(props) in constructor is a must
  - Refer this article by Dan Abramov https://overreacted.io/why-do-we-write-super-props/
  - You can't use this unless you have called super in constructor
  - Component class sets up this.props for you
  - If you don't pass props its fine because React does it for you later but then you will not have access to this
    props until the end of contructor
- componentDidMount is called once the initial rendering is done
- Refer https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for understanding lifecycle methods
- React optimizes its lifecycle methods. It will call constructor and render for all but the commit phase will be 
  batched
- This is done because DOM manipulation is expensive and heavy. That is why React combines all commit phase for all 
  components
- Never compare react lifecycle methods to hooks, because it will lead to incorrect understanding
- React devs removed all the fluff that was there around lifecycle methods and created hooks to simplify React 
  development
- Its important to know class as well, to understand how to write better code. Once you know class way and hooks 
  way you know how to simplify coding
- In class components you had to write a lot of code but the same thing could be done in a few lines using hooks
- You become a senior dev 
  - understand each and every statement they write
  - when you know why we do the small things the way we do them
  - if you create mess you should clean it up as well

## Single Responsibility Principle
- Each component should have a single responsibility
- You should not do lot of things in a single component
- You can also think of this as writing well structured and modular code where each piece does one thing and does 
  it well

## Custom Hooks
- A hook is just a utility function which helps us do one thing
- We can create our own hooks to create new functionalities
- Custom hooks are not mandatory, but if required its a great thing to have
- For eg. you can extract out all fetch and computation logic to a hook and the component can just use the hook and 
  render the UI only
- If you look at your code and think deeply you will come up with ideas about how to create your own useful hooks
- For eg
  - useLocalStorage
  - useOnlineStatus
- Alway use the word `use` as a prefix for hooks
  - Its suggested by React team
  - It makes sense

## How to build your JS
- Break down your app into smaller bundles has many names
  - chunking 
  - code splitting
  - dynamic bundling
  - lazy loading
  - on-demand loading
  - dynamic import
- You need to build strong logic to understand and break down large app into smaller parts which would each be a 
  separate bundle
- Use lazy and Suspense together to create chunks and also lazy load (on-demand)

## Styling in React
- You can use CSS, SASS, SCSS. But they do not scale well unless you want something very custom
- Styled components is a famous approach in React
- Companies prefer to use libraries and framework. 
- There are design systems and libraries 
  - Material UI (1st best for React)
  - Bootstrap (was famouse before)
  - Chakra UI
  - ANT Design (2nd best for React)
  - Tailwind
- There are many libraries built with Material UI system
- We will be using Tailwind for our learning
- For tailwind always follow the official docs to set it up
- Pros
  - Build whatever you want to. Seriously
  - Responsive everything
  - Hover and focus state
  - No duplication
  - Light and Dark mode
  - Instant beautification of UI
  - Good defaults
  - Highly modifiable
  - Very light-weight
  - It only imports classes that are used in code
- Cons
  - lot of classes make the code look bad
  - A little hard to maintain with that many classes

## Higher Order Components
- Its a function that takes a component and returns another component with some enhancement

## Controlled and Uncontrolled components
- Controlled - A component that is being controlled by parent component
- Uncontrolled - A component that is not controlled by any component and maybe manages its own logic

## Props Drilling & React Context
- Props drilling is when you keep passing on props from parent to child and so on
- This is a problem because its not a good practice
- React Context helps with this
- There are 2 ways to use context
1. Using hooks
2. Using Context.Consumer
- Context can be passed to parts or whole
- Use Context.Provider to update context values
- Just wrap any component inside Context.Provider and it will use the value provided by context
- You must master the data part of the app to ensure your React app works really well

## Redux
- Redux works in the data layer of our app
- Data layer and UI layer work in sync
- In React, you just update the data and UI is updated automatically
- IMPORTANT: Redux is not a mandatory
- Redux is required only for a large scale application
- For small to medium size apps, Redux is not required
- Redux is required when you have lots of data and lots of read and writes
- There is another library called zustand which is also gaining traction and does the same thing as Redux
- Pros
  - Redux helps manage lots of data
  - Helps debug easily with devtools
- Cons
  - Not always required
  - Boiler plate code required
- Redux offers effective large scale state management and works with all UI libraries
- There are 2 ways to use Redux
  1. React-Redux
  2. Redux Toolkit
- We will be using redux-toolkit, which is now the standard way of using redux
- Its ok to store all the data in Redux which is basically a large object
- We break down the store into slices, which are just separate parts of the state(mostly logically separated)
- How redux works
  - Write: dispatch action which calls reducer function which updates the slice of our redux store
  - Read: use selector (basically subscribe to store) to read data from store
- How to setup
  - Install @reduxjs/toolkit and react-redux
  - Build the store
  - Connect app to store
  - Create slice for cart
  - dispatch action (write data)
  - selector (read data)
- Ensure to use correct data while using selector
- Redux uses Immer library internally
- Use Redux Dev Tools to debug any issues, its a very powerful tool
- read about RTK query

## Testing
- We will only talk about dev testing. There are 2 ways
  - Manual testing
  - Automation testing
- Every time we make a small change, we need to make sure the whole app is still working correctly
- This is because one change could be affecting other areas in some way
- All components are interacting so we need to ensure 1 area doesn't break another area
- We should worry about every change we make even if its a single line of code
- 3 types of testing done by code (developer)
  - Unit testing - tests components in isolation
  - Integration testing - tests components working together
  - E2E testing - complete testing starting from landing on website till end of world
- We will not cover E2E testing here, we will cover unit and integration testing only
- We will use react testing library, which is built on top of DOM testing library
- If you build project using create-react-app it includes react-testing-library
- We will use Jest for writing unit tests
- Jest is a delightful JS testing framework
- RTL uses Jest internally

## Setting up testing in our app
- Install React Testing Library
- Install Jest 
- Install Babel related dependencies (we already have babel because of parcel)
- Configure Babel
- Configure parcel config file to disable default babel tranpilation
- Configure jest
- Install jsdom

## About testing
- While running test cases we need a run time, we have 2 options
  - Node
  - JS Dom (we will use this)
- Both work like a browser
- __ is known as dunder
- We use it to avoid name collisions and ensure that name is unique and kept for tests
