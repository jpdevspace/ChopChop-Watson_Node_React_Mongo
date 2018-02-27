import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Register from './Register';

class Nav extends Component {
    state = { 
        show: false, 
        task: '',
        isAuth: this.props.auth
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
        this.setState({isAuth: true});
        this.props.auth('true');
    }
    handleSignOut = () => {
        this.setState({ isAuth: false });
        this.props.auth('false');
    }


    render() {
        return(
            <header>
                <nav>
                    <ul>
                        {this.state.isAuth === true ? <li onClick={this.handleSignOut} >Sign out</li> :
                        <span>
                            <li onClick={() => { this.handleShow(); this.handleTask('login') }} >Login</li>
                            <li onClick={() => { this.handleShow(); this.handleTask('register') }} >Sign up</li>
                        </span>
                    }

                        <li><NavLink to="/">Search</NavLink></li>
                    </ul>
                </nav>
                    {this.state.isAuth === true ? <Redirect to="/user" /> 
                        : 
                        <Register 
                            msg={this.props.msg}
                            onAuth={this.handleAuth}
                            user={this.props.user}
                            show={this.state.show} 
                            handleClose={this.handleClose} 
                            task={this.state.task} />
                    }

                
            </header>
        );
    }
}

export default Nav;