# Create React App using CRA
    - Install Node in System
    - Install Node Package Manager (npm) in System
    - Open Terminal - node --version
    - Open Terminal - npm --version

    - crate new folder
    - open terminal in folder location
    - command for create React App - npx create-react-app my-app

# Open in VSCode - code .

    - cd my-app
    - Open Terminal - npm start // it open or run application in localhost browser
- webpack compiled successfully

- src folder is main folder
# src : Delete 
        - App.css
        - App.js  // recreate 
        - App.test.js
        - index.css
        - log.svg
        - reportWebVitals.js
        - setupTests.js

# open index.html // in public path
    - there is one div that having the id its value is root
    <div id ="root"></div>
    get thid <div> and render  <h1>Hello World</h1>
# open index.js // in src path
    - import react from node_module
    - import ReactDOM from node_module
    - Selct Element by using ReactDOM
    - render App component in root element
    - when you creating component First letter must be capital 
    - StricMode - for needed warning <React.StricMode></React.StricMode>

# Open Port : http://loclhost:3000/

# React Component -
    - creating componet 
        - in src folder : create HelloWorld.jsx file
        - create function HelloWorld and export it as :export default HelloWorld
        - import HelloWorld in index.js and render it in root element
        - you can export component two ways
            1. export default HelloWorld
            2. export {HelloWorld};

        - import it in index.js like
            1. import HelloWorld from './HelloWorld'
            2. import {HelloWorld} from './HelloWorld'

        - in src folder : create App.jsx file
        - import HelloWorld in App.jsx and render it in App component
        - import App in index.js and render it in root element
        - App component is main component of application
        - App component is parent of HelloWorld component

        - install react dev tools in chrome browser
        - it show the component in Inscpect mode

# JSX Rules :
    - How to apply css
        - create .css file and import the .css file in jsx file
        - using className not used class it is reserved word
    - How to access javascript in JSX 
        - using {javascript code} in JSX
        - used <h1>{firstName}</H1> etc.
        - function acessing: <h1>Hello, {firstName("test")}</h1>

# Apply CSS in JSX & Conditional classes
- inline css
    - directly apply css in JSX element using style={color : "red"}
    - Using Object assign object to style ={cssObject}
- external css
    - create .css file and import the .css file in jsx file
        className = "bg-dark"
    - using className not used class it is reserved word
- using conditional classes
    className= {isDarkMode?'bg-dark':null} : 
    - isDarlMode is true it set bg-dark else it false then set null
- using && operator
    className= {isDarkMode &&'bg-dark'}
    - if isDarkMode is true then bg-dark apply
- multiple classes with conditional
    className= {`container ${isDarkMode? "bg-dark":""}`}

# CSS Modules
    - CSS Modules is a feature in Webpack that allows you to import CSS files as modules, and use the classes in your CSS file in your JSX file
    - CSS Modules is enabled by default in Create React App
    - CSS Modules allows you to use the classes in your CSS file in your JSX file, and also
    - avoid duplication

# React Props
- Props is short for properties
- Props is a way to pass data from a parent component to a child component
- Props is immutable
- can't assign value or change value of props.
- props is only readable
- you can pass String,Number,Boolean,list, Array,object, function as props
- you can pass props as a default value
- you can pass props as a required value

# React children props
- children is a special prop in React that allows you to pass a child component or a string of
- children can be a single child or multiple children
- children can be a function that returns a child component or a string of children
- children can be a list of children with a key and a value

# React Render List
- render list of items
- use map function to render list of items
- use key to identify each item in the list
- use index as key is not recommended
- use unique id as key is recommended

# key props
- key is a special prop in React that allows you to identify each item in a list
- key is used to optimize the rendering of the list
- key is used to prevent the list from being re-rendered unnecessarily
- key is used to improve the performance of the list

# Events
- Events is a way to handle user interactions in React
- click Events
- onClick event handle useing function that can action apper when event is called.
- onMouseOver

# State
- State is a way to store data in React
- State is mutable
- State is used to store data that can change over time
- functional components - you can only call state (useState, useEffect) within the function component.
- class components - use this.state to access state
- use setState to update state

- hooks - 
- use state to store data
- In react we can not used normal veriables to change the UI.
- we can use state to change the UI.
- when change state then UI render again and change updated on UI.

- useState()
- useState(defaultvalue) -----> it return array[stateValue,functionToUpdateThatStateValue]
- useState call directly components not call outside of component within function 

# Staye Example
- create AppStateExample .jsx file
- this file having Users Detals in a state
- Users details send to the Users.jsx file using props




