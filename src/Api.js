import React, {Component} from 'react';
import axios from 'axios';

class Api extends Component
{

    constructor(props){
        super(props);
        this.state ={
            postes:[],
        }
    }

     componentDidMount()
     {
        axios.get("https://jsonplaceholder.typicode.com/posts").then
        (response=>{
            this.setState({
                postes:response.data
                
            })
            // console.log(response)
        })
     }
    render()
    {
    return(
        <React.Fragment>
        <table>
            <thead>
               <tr>
                   <th>
                       Serial Number
                   </th>
                   <th>
                       Title
                   </th>
               </tr>
            </thead>
            <tbody>
                {this.state.postes.map((item,k)=>
                {
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>

                    )
                })}
                
                    
            </tbody>
        </table>
        </React.Fragment>
    );
}
}

export default Api;