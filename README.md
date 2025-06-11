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