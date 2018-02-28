import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Messages from './Components/Messages';
import App from './Components/App';
import User from './Components/User';
import Nav from './Components/Nav';

class Router extends Component {
    state = {
        message: '',
        isAuth: false,
        currentUser: {}
    }

    handleMessages = msg => {
        this.setState({ message: msg })
    }

    handleAuth = authStatus => {
        this.setState({ isAuth: authStatus })
    }
    
    getCurrentUser = user => {
        this.setState({ currentUser: user })
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Messages msg={this.state.message} />
                    <Nav 
                        auth={this.handleAuth} 
                        isAuth={this.state.isAuth} 
                        msg={this.handleMessages}
                        user={this.getCurrentUser} />
                    <Route exact path="/" 
                        render={ () => <App user={this.state.currentUser} />}  />
                    <Route path="/user" 
                        render={ () => <User isAuth={this.state.isAuth} user={this.state.currentUser} /> } /> 
                    
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
