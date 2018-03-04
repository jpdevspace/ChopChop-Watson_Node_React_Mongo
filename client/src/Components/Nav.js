import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="nav-link">Cheff W</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    { !props.isAuth
                        ?
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signin" className="nav-link">Login</NavLink>
                                </li>
                            </ul>
                        :
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                                </li>
                            </ul>  
                    }   
                </ul>
            </div>
        </nav>
    );
}

export default Nav;