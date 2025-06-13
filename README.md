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