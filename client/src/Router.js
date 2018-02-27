import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Messages from './Components/Messages';
import App from './Components/App';
import User from './Components/User';
import Nav from './Components/Nav';

class Router extends Component {
    state = {
        message: ''
    }

    handleMessages = msg => {
        this.setState({ message: msg })
    }



    render() {
        return(
            <BrowserRouter>
                <div>
                    <Messages msg={this.state.message} />
                    <Nav msg={this.handleMessages} />
                    <Route exact path="/" component={App} /> 
                    <Route path="/user" component={User} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
