import React,{useState} from 'react';

function Text(Props)
{

    const[name,setname] = useState({
        firstname : '',
        lastname : '',
    })
    return(
        <React.Fragment>
        
        <input type="text" onChange={(e)=>{setname({...name,firstname:e.target.value})}}></input>
        <input type="text"  onChange={(e)=>setname({...name,lastname:e.target.value})}></input>
        <h3>Firstname :{name.firstname}</h3>
        <h3>lastname :{name.lastname}</h3>
        
        </React.Fragment>

    );
}

export default Text;