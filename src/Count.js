import React,{useState} from 'react';

function Count(Props)
{
    //old method
    function add()
{
    setcount(count+1)
}
    const[count,setcount] = useState(2)
    return(
        <React.Fragment>
        <button onClick={add}>+</button>
        {/* Arrow funcion */}
        <button onClick={()=>setcount(count-1)}>-</button>
      
        <h3>{count}</h3>
      
        
        </React.Fragment>

    );
}

export default Count;