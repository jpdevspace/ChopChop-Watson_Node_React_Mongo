import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div>
                <NavLink id="w-title" to="/" className="nav-link"><div id="w-hat"></div>Cheff W</NavLink>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    { !props.isAuth
                        ?
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link">Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signin" className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/instructions" className="nav-link">Instructions</NavLink>
                                </li>
                            </ul>
                        :
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link">Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/instructions" className="nav-link">Instructions</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                                </li>
                            </ul>  
                    }   
                </div>
            </div>
        </nav>
    );
}

export default Nav;