import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Register from './Register';

class Nav extends Component {
    state = { 
        show: false, 
        task: '',
        isAuth: false
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleTask = task => {
        this.setState({ task: task })
    }
    handleAuth = () => {
        this.setState({ isAuth: true })
    }

    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li onClick={() => { this.handleShow(); this.handleTask('login') }} >Login</li>
                        <li onClick={() => { this.handleShow(); this.handleTask('register') }} >Sign up</li>
                        <li><NavLink to="/">Search</NavLink></li>
                    </ul>
                </nav>
                    {this.state.isAuth ? <Redirect to="/user" /> 
                        : 
                        <Register 
                            msg={this.props.msg}
                            auth={this.handleAuth}
                            show={this.state.show} 
                            handleClose={this.handleClose} 
                            task={this.state.task} />
                    }

                
            </header>
        );
    }
}

export default Nav;