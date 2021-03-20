//hook lifecycle

import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Hooks extends Component
{
    constructor(props)
    {
      
    console.log("constructor calling");
    
      super(props);
        this.state ={
            Counter:0,
        }
    }
    increment=() =>{

        this.setState( (prev,props)=>({
            Counter : prev.Counter+1,
        })

        )
    }
    componentWillUpdate()
    {
        console.log("Will event calling");
    }
    render()
    {
        console.log("Render calling");
    return(
        
        <React.Fragment>
        <button onClick={this.increment}>+</button>
        <h3>{this.state.Counter}</h3>
        </React.Fragment>
       
    );

}
componentDidUpdate()
{
    console.log("Did update calling");
}
}

export default Hooks;