import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import React,{Component} from 'react';

class App extends Component
{
    render()
    {
    return(
       
            <Router>
                <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>

                </div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route  path="/Contact">
                        <Contact/>
                    </Route>
                    <Route  path="/About">
                        <About/>
                    </Route>
                </Switch>
            </Router>
    
        
    );
}
}

export default App;