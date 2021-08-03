import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'

const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>

            <Switch>

                <Route path='/register'>
                    <Register/>
                </Route>

                <Route path='/login'>
                    <Login/>
                </Route>

                <Route path='/'>
                    <Home/>
                    <h2>home page</h2>
                </Route>

            </Switch>


        </div>
    )
}

export default Navbar