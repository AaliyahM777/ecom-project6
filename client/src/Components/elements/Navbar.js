import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import LogIn from './Login';
import Logout from './Logout';
import SignUp from './Signup';
import LogOut from './Logout';
import Footer from './Footer';

/* created a  navbar functional component and it returns 
  how the navbar  links will dsiplay and look through bootstrap
  my icon on navbar
 */

function NavBar(props) {
    const { currentUser, onLoginSuccess, onLogOut, onSignUpSuccess } = props
    return(  
        <Router>
            {currentUser
            ? (
                <div>
                    <ul className="navbar fixed-top justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contacts} />
                    <Route path="/logout" render={(props) => <LogOut {...props} onLogOut={onLogOut} />} />
                </div>
            )
            : (
                <div>
                    <ul className="navbar fixed-top justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" render={(props) => <LogIn {...props} onLoginSuccess={onLoginSuccess} />} />
                    <Route path="/signup" render={(props) => <SignUp {...props} onSignUpSuccess={onSignUpSuccess} />} />
                </div>
            )}
        </Router>
        // navbar is exapnded out of large screens like desktop laptops and fixed at top so even when we scroll through website it stays at top
        /*
        <nav className="navbar navbar-expand-lg fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
                <span className="navbar-toggler-icon">&#9776;</span>
            </button>

            <a className="navbar-brand" href="/products"><img src="https://library.kissclipart.com/20190223/biw/kissclipart-pen-tool-logo-png-clipart-pen-clip-art-f38f00d153e75c72.png" class="img-fluid" alt="penpowerslogo"/> </a>
            <div className="collaspe navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {/*My navbar links linking to each page withing website*/
        //             <li className="nav-item"> <a className="nav-link" href="/">Home</a></li>
        //             <li className="nav-item"> <a className="nav-link" href="/products">Our Products</a></li>
        //             <li className="nav-item"> <a className="nav-link" href="/contacts">Contact Us </a> </li>
        //             <li className="nav-item"> <a className="nav-link" href="/login">Login</a> </li>
        //             <li className="nav-item"> <a className="nav-link" href="/signup">Signup</a> </li>
        //             <li className="nav-item"> <a className="nav-link" href="/logout">Logout</a> </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default NavBar;