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