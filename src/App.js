import Message  from "./StateEx/Message";
import Product from "./Product/Product";
import React from "react";
import Navbar from "./Navbar/Navbar";

class App extends React.Component{
    render(){
        return <div>
            <h1>App Componet</h1><hr />
            <Message/><hr />
            <Product/><hr />
            <Navbar/>
        </div>
    }
}
export default App