import { useState } from "react";
let Message=()=>{
    let[msg,setMsg]=useState("Hello")
    let gmhandler=()=>{
        setMsg("Good mrng")
    }
    let gnHandler=()=>{
        setMsg("Good nyt")
    }
    return <div>
        <h3>Message Component</h3>
        <h4>Value:{msg}</h4>
        <button onClick={gmhandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message