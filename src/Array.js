//maping function to list elements 

import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Array extends Component
{
    constructor(props){
        super(props);
        this.state ={
            items :['Apple','Mango','Orange','Grapes'],
            persons:[
                {
                    name:"kripa",
                    age:20
                },
                {
                    name:"Mahima",
                    age:23
                },
                {
                    name:"remya",
                    age:23
                }
            ],
        }
    }
    render()
    {
        var lis = this.state.items.map(function(item,key) {
            return <li key={key}>{item}</li>
        })
        

    return(
        
        <React.Fragment>
            <ul>
                <li>{lis}</li>

                {/* or by direct way */}
                 {/*{this.state.items.map(function(item) {
                 return<li>{item}</li>})} */}
            </ul>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {this.state.persons.map((item,key)=>{
            return(
            <tr key={key}>
                <td>{item.name}</td>
                <td>{item.age}</td>

            </tr>
            )
        })}
            </table>
        
        </React.Fragment>
       
    );

}
}

export default Array;