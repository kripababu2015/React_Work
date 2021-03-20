import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Home extends Component
{
    render()
    {
    return(
        <React.Fragment>
        <h2>Welcome to Home Page</h2>
        </React.Fragment>
    );
}
}

export default Home;