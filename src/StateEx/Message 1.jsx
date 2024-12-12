import React from 'react'
class Message extends React.Component{
    // msg="Hello"
        state={
            msg:"Hello"
        }
        gmHandler=()=>{
            this.setState({msg:"Good Morning"})
        }
        gnHandler=()=>{
            this.setState({msg:"Good Night"})
        }
    render(){
        console.log('Testcase 123');
        
        return <div>
            <h2>Value:{this.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message