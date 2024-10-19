// console.log("Hello World");
const rootElement = document.getElementById("root");
// console.log(rootElement); // it select root element (<div id="root"></div>)

    //type,props,children
    // function hello(){
    //     return  React.createElement("h1",{className :"heading"},"Hello World");
    // }
    // const element = React.createElement("div", { id: "root" }, "Hello World");
// const element = React.createElement("h1",{className :"heading"},"Hello World");
    // console.log(element); // it will return a virtual DOM element
    function Hello(){
        return <h1>Hello word</h1>
    }

ReactDOM.createRoot(rootElement).render(<Hello/>);// use first letter should be Capital of function Hello oterwise it gives error - for understand to JSX

//JSX
//  multiple changes and call React / ReactDOM it is not possible to handle 
// so we can used JSX
// babel can convert  <h1>Hello word</h1> to React.createElement("h1",{className :"heading"},"Hello World");
//using babel cdn





