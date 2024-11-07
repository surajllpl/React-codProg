# Create React App using CRA
# Install Node in System
# Install Node Package Manager (npm) in System
# Open Terminal - node --version
# Open Terminal - npm --version

# crate new folder
# open terminal in folder location
# command for create React App - npx create-react-app my-app

# Open in VSCode - code .

# cd my-app
# Open Terminal - npm start // it open or run application in localhost browser
# webpack compiled successfully

# src folder is main folder
# src : delete 
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
        




