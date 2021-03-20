import React from 'react';

function Greetings(Props)
{
    let x=Props.name.toUpperCase();
    return(
        <h2>Hello {x}</h2>
    );
}

export default Greetings;