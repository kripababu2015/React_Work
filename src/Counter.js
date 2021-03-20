import React, { Component } from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            Counter:0, //counter is an object
            strings:"kripa",
            text:"hi",
        }
    }
    increment=() =>{

        this.setState( (prev,props)=>({
            Counter : prev.Counter+1,
        })

        )
    }
    decrement=() =>{
        this.setState((prev,props)=>({
            Counter : prev.Counter-1,
        })
        )
    }
    string=()=>{
        this.setState((prev,props)=>({
          
            strings : "kushi",
        })
        )
    }
    textchange=(e)=>{
        this.setState((prev,props)=>({
            text :e.target.value,


        })
        )
    }
   
    render(){
        console.log("Rendering");
        return(
            <React.Fragment>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.string}>click</button>
            <h3>{this.state.Counter}</h3>
            <h3>{this.state.strings}</h3>

            <input type="text" name="name" onChange={this.textchange}></input>
            <h3>{this.state.text}</h3>
            </React.Fragment>

        );
    }
    
}
export default Counter;